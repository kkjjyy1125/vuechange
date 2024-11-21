"use strict";
const fs = require('fs'); 
const electron = require("electron");
const path = require("path");
const utils = require("@electron-toolkit/utils");
const promises$1 = require("timers/promises");
const fetch = require("node-fetch");
const node_path = require("node:path");
const fixed = require("set-interval-async/fixed");
const promises = require("node:timers/promises");
const electronUpdater = require("electron-updater");
function _interopNamespaceDefault(e) {
  const n = Object.create(null, { [Symbol.toStringTag]: { value: "Module" } });
  if (e) {
    for (const k in e) {
      if (k !== "default") {
        const d = Object.getOwnPropertyDescriptor(e, k);
        Object.defineProperty(n, k, d.get ? d : {
          enumerable: true,
          get: () => e[k]
        });
      }
    }
  }
  n.default = e;
  return Object.freeze(n);
}
const path__namespace = /* @__PURE__ */ _interopNamespaceDefault(path);

class NodeFetch {
  instance;
  token = "";
  token2 = "";
  setTokens(token, token2) {
    if (token)
      this.token = token;
    this.token2 = token2;
  }

  async fetch(_data) {
    try {
      // 요청 헤더 설정
      _data.option.headers = {
        "Content-Type": "application/json",
        Authorization: `Bearer ${this.token2}`,
        "Auth-Key": this.token
      };
      const url = `http://api.jarvis7.net${_data.path}`;
      
      // 요청 정보를 파일에 저장
      fs.appendFileSync('api_requests.txt', `Requested URL: ${url}\n`);
      fs.appendFileSync('api_requests.txt', `Request Options: ${JSON.stringify(_data.option)}\n\n`);

      // 요청을 보내고 응답 처리
      const response = await fetch(url, _data.option);

      // 응답이 401이면 예외 처리
      if (response.status == 401) throw "Unauthorized";

      // 응답 내용을 JSON으로 변환
      const jsonResponse = await response.json();

      // 응답 정보를 파일에 저장
      fs.appendFileSync('api_requests.txt', `Response from URL: ${url}\n`);
      fs.appendFileSync('api_requests.txt', `Response Body: ${JSON.stringify(jsonResponse)}\n\n`);

      return jsonResponse;

    } catch (e) {
      // 에러 발생 시 에러 메시지 기록
      fs.appendFileSync('api_requests.txt', `Error: ${e}\n\n`);
      return e && typeof e == "string" && e == "Unauthorized" ? false : null;
    }
  }
}

const NodeFetch$1 = new NodeFetch();
const forkPath = path.join(__dirname, "./fork-fcbdf4fe.js");
class Browser {
  items = [];
  site;
  mainWindow = null;
  window = null;
  title = null;
  view = null;
  timer = null;
  countError = 0;
  countShow = 1;
  constructor(site) {
    this.site = site;
    this.mainWindow = electron.BrowserWindow.getAllWindows()[0];
  }
  isBoost() {
    return this.site.url_run.filter(
      (item) => (item + "").indexOf("JBS_APPEND") > -1 || (item + "").indexOf("dropdown") > -1
    ).length > 0;
  }
  async openView() {
    for (let i = 0; i < 3; i++) {
      if (await this.view?.webContents.loadURL(this.site.url_index).then(() => {
        return true;
      }).catch((error) => {
        return false;
      }))
        break;
      else
        await promises.scheduler.wait(500);
    }
    return true;
  }
  open() {
    this.window = new electron.BaseWindow({
      title: this.site.name,
      height: 800,
      width: 1400,
      frame: false,
      show: true,
      // 기존
      // show: false,
      closable: false,
      opacity: 0,
      // 기존
      icon: node_path.join(__dirname, "../../build/icon_browser.ico")
    });
    this.window.menuBarVisible = false;
    this.window.setTitle(this.site.name);
    this.window?.setIgnoreMouseEvents(true);
    promises.scheduler.wait(1e3).then(async () => {
      this.window?.hide();
      this.window?.setIgnoreMouseEvents(false);
      this.window?.setOpacity(1);
    });
    this.title = new electron.WebContentsView({
      webPreferences: {
        devTools: utils.is.dev,
        preload: node_path.join(__dirname, "../preload/main.js"),
        sandbox: false
      }
    });
    this.title.webContents.once("dom-ready", async () => {
      this.title?.webContents.send("MESSAGE", {
        channel: "site",
        site: this.site
      });
    });
    this.title.setBounds({ x: 0, y: 0, width: 1385, height: 65 });
    if (utils.is.dev && process.env["ELECTRON_RENDERER_URL"]) {
      this.title.webContents.loadURL(`${process.env["ELECTRON_RENDERER_URL"]}/browser.html`);
    } else {
      this.title.webContents.loadFile(node_path.join(__dirname, "../renderer/browser.html"));
    }
    this.window.contentView.addChildView(this.title);
    this.view = new electron.WebContentsView({
      webPreferences: {
        devTools: utils.is.dev,
        preload: node_path.join(__dirname, "../preload/browser.js"),
        // preload alert, hidden 방지용 필수 옵션:nodeIntegrationInSubFrames contextIsolation sandbox
        nodeIntegrationInSubFrames: true,
        contextIsolation: false,
        sandbox: false,
        backgroundThrottling: !this.isBoost()
      }
    });
    this.view.setBounds({ x: 0, y: 65, width: 1385, height: 800 - 65 });
    this.view.setBackgroundColor("#ffffff");
    this.view.webContents.setAudioMuted(true);
    this.window.contentView.addChildView(this.view);
    if (this.site.url_response) {
      this.view.webContents.debugger.attach("1.3");
      this.view.webContents.debugger.sendCommand("Network.enable");
      this.view.webContents.debugger.on("message", (event, method, params) => {
        if (method === "Network.responseReceived") {
          if (params.response.url.indexOf(this.site.url_response) > -1) {
            setTimeout(() => {
              this.view?.webContents.debugger.sendCommand("Network.getResponseBody", {
                requestId: params.requestId
              }).then((response) => {
                this.view?.webContents.executeJavaScript(`
                    var elemDiv = document.createElement('input');
                    elemDiv.setAttribute('class', 'jarvis-bot');
                    elemDiv.setAttribute('type', 'hidden');
                    elemDiv.setAttribute('value', '${Buffer.from(
                  unescape(encodeURIComponent(response.body)),
                  "binary"
                ).toString("base64")}');
                    ${this.site.frame ? this.site.frame + "." : ""}document.body.appendChild(elemDiv);0
                    `);
              }).catch((e) => {
              });
            }, 800);
          }
        }
      });
    }
    this.openView();
    this.view.webContents.on("before-input-event", (event, input) => {
      if (input.control && input.key.toLowerCase() === "f") {
        this.title?.webContents.focus();
        this.title?.webContents.send("MESSAGE", {
          channel: "focus"
        });
        event.preventDefault();
      }
    });
    let lastHandle;
    this.window.on("resize", (e) => {
      e.preventDefault();
      lastHandle = setTimeout(() => {
        if (lastHandle != null)
          clearTimeout(lastHandle);
        if (this.window && this.title && this.view) {
          this.title.setBounds({
            x: 0,
            y: 0,
            width: this.window.getBounds().width,
            height: 65
          });
          this.view.setBounds({
            x: 0,
            y: 65,
            width: this.window.getBounds().width,
            height: this.window.getBounds().height - 65
          });
        }
      }, 10);
    });
    this.window.on("close", (event) => {
      this.window?.hide();
      event.preventDefault();
    });
  }
  show() {
    this.window?.show();
    this.message("", "보이기");
  }
  minimize() {
    this.window?.hide();
    this.message("", "숨기기");
  }
  maximize() {
    if (this.window?.isMaximized())
      this.window.unmaximize();
    else
      this.window?.maximize();
    this.message("", "창조절");
  }
  close() {
    this.window?.setClosable(true);
    this.window?.removeAllListeners("close");
    this.title?.webContents.close();
    this.view?.webContents.close();
    this.window?.close();
    this.message("destroy", "닫기완료");
  }
  destroy() {
    this.window?.setClosable(true);
    this.stop();
    if (this.window)
      this.window.close();
    this.message("destroy", "제거완료");
  }
  async parse() {
    let html = null;
    let rows = null;
    let count = 0;
    let vwc = this.view?.webContents;
    let urls = [];
    try {
      urls = this.site.url_run.filter((item) => item.trim() != "");
      for (let i = 0; i < urls.length; i++) {
        const url = urls[i];
        try {
          if (!this.timer)
            break;
          const command = url.indexOf("click()") > -1 || url.indexOf("scrollTo") > -1 || url.indexOf("location.href") > -1 || url.indexOf("location.reload") > -1 || url.indexOf("sleep") > -1 || url.indexOf("scroll(") > -1 ? `${url}` : `var url = new URL(location.href);location.href = url.protocol + '//' + url.host + '${url}';`;
          await vwc?.executeJavaScript(command);
          if (!this.timer)
            break;
          if (url.indexOf("sleep") > -1) {
            const delay = /sleep\((.*)\)/g.exec(url);
            if (delay && delay.length == 2) {
              await this.waitUntilStop(parseInt(delay[1]));
            }
          } else {
            await this.waitUntilStop(5);
          }
          html = await vwc?.executeJavaScriptInIsolatedWorld(2, [
            {
              code: `
                new Promise((resolve, reject) => {
                  try {
                      resolve(${this.site.frame ? this.site.frame + "." : ""}document.body.innerHTML)
                  } catch(err) {
                      //reject({ name: '2.' + err.name, message: err.message, stack: err.stack })
                      resolve('')
                  }
                })
              `
            }
          ]);
          rows = html && html.length > 0 ? await this.fork(html + "") : [];
          if (rows.length > 0 && this.timer) {
            NodeFetch$1.fetch({
              path: "/api/parse",
              option: {
                method: "POST",
                body: JSON.stringify({ domain: this.site.domain, data: rows })
              }
            }).then((_rs) => {
            }).catch((_e) => {
              rows = [];
              html = "";
            });
            count = count + rows.length;
            this.message("success", `수집(${rows.length})`);
          }
          rows = null;
        } catch (e) {
          await this.waitUntilStop(10);
        } finally {
          await this.waitUntilStop(5);
        }
      }
      if (this.timer) {
        if (count > 0) {
          this.countError = 0;
          this.message("success", `수집완료(${count})`);
        } else {
          this.countError = this.countError + 1;
          if (this.countError >= 3)
            this.message("error", `수집실패(${count})`);
        }
      }
    } catch (e) {
      this.message("error", "수집오류");
    } finally {
      this.countShow = this.countShow + 1;
      await this.waitUntilStop(urls.length > 3 ? 10 : this.site.interval);
      html = null;
      rows = null;
      vwc = null;
      urls = [];
    }
  }
  async runner() {
    try {
      const isLogin = await this.loginCheck();
      if (isLogin) {
        await this.parse();
      } else {
        if (this.site.capcha) {
          this.message("error", "수동로그인필요");
        } else {
          if (await this.loginAction() == false) {
            this.message("error", "로그인실패");
          }
        }
      }
    } catch (e) {
    }
  }
  start() {
    this.message("", "수집시작");
    if (!this.timer) {
      this.timer = fixed.setIntervalAsync(async () => {
        await this.runner();
      }, 5e3);
    }
  }
  stop() {
    if (this.timer) {
      fixed.clearIntervalAsync(this.timer);
      this.timer = null;
      this.message("ready", "수집중지");
    }
  }
  test() {
    this.view?.webContents.executeJavaScript(`document.title`).then((data) => {
    });
  }
  message(status, message) {
    this.mainWindow?.webContents.send("MESSAGE", {
      site_id: this.site.id,
      site_name: this.site.name,
      timestamp: Date.now(),
      status,
      message
    });
  }
  generateSelector(selector) {
    return selector.indexOf("document.querySelector") > -1 ? selector : `document.querySelector('${selector}')`;
  }
  async isElement(selector) {
    let elem = false;
    try {
      elem = await this.view?.webContents.executeJavaScriptInIsolatedWorld(3, [
        {
          code: `
        new Promise((resolve, reject) => {
          try {
              resolve(${this.generateSelector(selector)} ? true : false)
          } catch(err) {
              resolve(false)
          }
        })
      `
        }
      ]);
      return elem;
    } catch (e) {
      return false;
    }
  }
  async loginCheck() {
    try {
      const isLoginPage = await this.isElement(this.site.sel_username);
      return !isLoginPage;
    } catch (e) {
      return false;
    }
  }
  async loginAction() {
    try {
      await this.view?.webContents.executeJavaScriptInIsolatedWorld(4, [
        {
          code: `
          new Promise((resolve, reject) => {
            try {
              ${this.generateSelector(this.site.sel_username)}.value = '${this.site.username}';
              resolve(true)
            } catch(err) {
              resolve(false)
            }
          })
        `
        }
      ]);
      await this.view?.webContents.executeJavaScriptInIsolatedWorld(5, [
        {
          code: `
          new Promise((resolve, reject) => {
            try {
              ${this.generateSelector(this.site.sel_password)}.value = '${this.site.password}';
              resolve(true)
            } catch(err) {
              resolve(false)
            }
          })
        `
        }
      ]);
      await this.view?.webContents.executeJavaScriptInIsolatedWorld(0, [
        {
          code: `
          new Promise((resolve, reject) => {
            try {
              ${this.site.sel_button.indexOf("click()") > -1 ? this.site.sel_button : this.generateSelector(this.site.sel_button) + ".click();"}
              resolve(true)
            } catch(err) {
              reject({ name: '5.' + err.name, message: err.message, stack: err.stack })
            }
          })
        `
        }
      ]);
      await promises.scheduler.wait(5e3);
      const isLoginPage = await this.isElement(this.site.sel_username);
      return isLoginPage ? false : true;
    } catch (e) {
      return false;
    }
  }
  // worker(html) {
  //   const worker = new Worker(workerPath, {})
  //   return new Promise((resolve, reject) => {
  //     worker.on('message', (message) => {
  //       resolve(message)
  //     })
  //     worker.on('error', (err) => {
  //       reject(err)
  //     })
  //     worker.on('exit', () => {
  //       // console.log('worker exit')
  //       html = null
  //       worker.terminate()
  //     })
  //     worker.postMessage({
  //       script: this.site.script,
  //       url_response: this.site.url_response,
  //       html
  //     })
  //   })
  //   // return new Promise((res, rej) => {
  //   //   creatWorker({
  //   //     workerData: {
  //   //       script: this.site.script,
  //   //       url_response: this.site.url_response,
  //   //       html
  //   //     }
  //   //   })
  //   //     .on('message', (message) => {
  //   //       html = null
  //   //       res(message)
  //   //     })
  //   //     .postMessage('')
  //   // })
  // }
  fork(html) {
    const up = electron.utilityProcess.fork(forkPath);
    return new Promise((res) => {
      up.postMessage({
        script: this.site.script,
        url_response: this.site.url_response,
        html
      });
      up.once("message", (result) => {
        res(result);
      });
      up.once("exit", () => {
        html = null;
      });
    });
  }
  async waitUntilStop(second) {
    for (let i = 0; i < second * 2; i++) {
      if (!this.timer)
        break;
      await promises.scheduler.wait(500);
    }
  }
}
class Updater {
  mainWindow;
  constructor(mainWindow) {
    this.mainWindow = mainWindow;
  }
  listen() {
    electronUpdater.autoUpdater.on("checking-for-update", () => {
      this.send("checking-for-update", "업데이트 확인 중...");
    });
    electronUpdater.autoUpdater.on("update-available", (info) => {
      this.mainWindow.removeAllListeners();
      this.send("update-available", "업데이트가 가능합니다.");
    });
    electronUpdater.autoUpdater.on("update-not-available", (info) => {
      this.send("update-not-available", "현재 최신버전입니다.");
    });
    electronUpdater.autoUpdater.on("error", (err) => {
      this.send("error", "에러가 발생하였습니다. 에러내용 : " + err);
    });
    electronUpdater.autoUpdater.on("download-progress", (progressObj) => {
      let log_message = "다운로드 속도: " + progressObj.bytesPerSecond;
      log_message = log_message + " - 현재 " + progressObj.percent + "%";
      log_message = log_message + " (" + progressObj.transferred + "/" + progressObj.total + ")";
      this.send("download-progress", progressObj.percent);
    });
    electronUpdater.autoUpdater.on("update-downloaded", (info) => {
      this.send("update-downloaded", "업데이트 다운로드가 완료되었습니다.");
    });
    electron.ipcMain.on("UPDATE", (_event, arg) => {
      try {
        this[arg.channel]();
      } catch (error) {
      }
    });
  }
  check_for_update() {
    electronUpdater.autoUpdater.checkForUpdates();
  }
  quit_and_install() {
    this.mainWindow.removeAllListeners();
    electronUpdater.autoUpdater.quitAndInstall(true, true);
  }
  send(channel, message) {
    this.mainWindow.webContents.send("UPDATE", {
      channel,
      message
    });
  }
}
class Main {
  static mainWindow;
  static siteBrowsers = [];
  static onReady() {
    utils.electronApp.setAppUserModelId("com.electron");
    electron.app.userAgentFallback = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Safari/537.36";
    Main.mainWindow = new electron.BrowserWindow({
      title: "자비스",
      width: 370,
      height: 534,
      show: false,
      frame: false,
      resizable: false,
      maximizable: false,
      autoHideMenuBar: true,
      icon: path__namespace.join(__dirname, "../../build/icon.png"),
      webPreferences: {
        devTools: utils.is.dev,
        backgroundThrottling: false,
        preload: path__namespace.join(__dirname, "../preload/main.js"),
        sandbox: false
      }
    });
    Main.mainWindow.on("close", (event) => {
      event.defaultPrevented;
    });
    electron.ipcMain.handle("FETCH", async (_event, data) => {
      return await NodeFetch$1.fetch(data);
    });
    electron.ipcMain.on("MESSAGE", async (_event, arg) => {
      try {
        if (arg.channel == "main_window_resize_opacity") {
          this.mainWindow.setOpacity(0);
          this.mainWindow.setBounds(arg.data);
          this.mainWindow.center();
          await promises$1.scheduler.wait(1500);
          for (let i = 0; i <= 150; i++) {
            this.mainWindow.setOpacity(i / 150);
            await promises$1.scheduler.wait(10);
          }
        } else if (arg.channel == "main_window_focus") {
          this.mainWindow.focus();
        } else if (arg.channel == "main_window_close") {
          electron.app.exit();
        } else if (arg.channel == "main_window_minimize") {
          this.mainWindow.minimize();
        } else if (arg.channel == "browser_window_open") {
          let browser = this.siteBrowsers.find((item) => item.site.id == arg.data);
          if (!browser) {
            NodeFetch$1.fetch({
              path: `/api/site/${arg.data}`,
              option: { method: "GET" }
            }).then((site) => {
              browser = new Browser(site);
              browser.open();
              this.siteBrowsers.push(browser);
              browser.message("ready", "준비완료");
            });
          }
          browser = null;
        } else if (arg.channel == "browser_window_show") {
          const browser = this.siteBrowsers.find((item) => item.site.id == arg.data);
          if (browser)
            browser.show();
        } else if (arg.channel == "browser_window_minimize") {
          const browser = this.siteBrowsers.find((item) => item.site.id == arg.data);
          if (browser)
            browser.minimize();
        } else if (arg.channel == "browser_window_maximize") {
          const browser = this.siteBrowsers.find((item) => item.site.id == arg.data);
          if (browser) {
            browser.maximize();
          }
        } else if (arg.channel == "browser_window_close") {
          const pos = this.siteBrowsers.findIndex((el) => el.site.id == arg.data);
          const browser = this.siteBrowsers.find((item) => item.site.id == arg.data);
          if (browser) {
            browser.destroy();
            this.siteBrowsers.splice(pos, 1);
          }
          if (browser)
            browser.close();
        } else if (arg.channel == "browser_window_update") {
          const browser = this.siteBrowsers.find((item) => item.site.id == arg.data.id);
          if (browser) {
            browser.site = arg.data;
            browser.title?.webContents.send("MESSAGE", {
              channel: "site",
              site: arg.data
            });
            browser.message("ready", "준비완료");
          }
        } else if (arg.channel == "browser_window_reset") {
          const browser = this.siteBrowsers.find((item) => item.site.id == arg.data);
          if (browser) {
            const isStart = browser.timer ? true : false;
            NodeFetch$1.fetch({
              path: `/api/site/${arg.data}`,
              option: { method: "GET" }
            }).then(async (site) => {
              browser.site = site;
              browser.title?.webContents.send("MESSAGE", { channel: "site", site });
              browser.minimize();
              if (isStart)
                browser.stop();
              await promises$1.scheduler.wait(1e3);
              browser.view?.webContents.loadURL(browser.site.url_index).catch((error) => {
              });
              await promises$1.scheduler.wait(1e3);
              if (isStart)
                browser.start();
              browser.show();
              browser.message("ready", "준비완료");
            });
          }
        } else if (arg.channel == "browser_window_start") {
          let browser = this.siteBrowsers.find((item) => item.site.id == arg.data);
          if (browser) {
            browser.start();
            browser = null;
          }
        } else if (arg.channel == "browser_window_stop") {
          const browser = this.siteBrowsers.find((item) => item.site.id == arg.data);
          if (browser)
            browser.stop();
        } else if (arg.channel == "browser_window_find") {
          const browser = this.siteBrowsers.find((item) => item.site.id == arg.data.site_id);
          if (browser && browser.window && browser.view) {
            if (arg.data.from == "main") {
              browser.window.show();
              browser.title?.webContents.send("MESSAGE", {
                channel: "find",
                keyword: arg.data.keyword
              });
            }
            if (arg.data.keyword) {
              browser.view.webContents.findInPage(arg.data.keyword, {
                forward: true,
                findNext: true
              });
            } else {
              browser.view.webContents.stopFindInPage("clearSelection");
            }
          }
        } else if (arg.channel == "browser_window_home") {
          const browser = this.siteBrowsers.find((item) => item.site.id == arg.data);
          if (browser && browser.view) {
            browser.view?.webContents.loadURL(browser.site.url_index).catch((error) => {
            });
          }
        } else if (arg.channel == "browser_window_dialog") {
          const item = this.siteBrowsers.find(
            (elem) => elem.view?.webContents.getProcessId() === _event.processId
          );
          if (item && item.window && item.window.isFocused()) {
            item.window?.blur();
            item.window?.focus();
          }
        } else if (arg.channel == "set_auth_token") {
          NodeFetch$1.setTokens(arg.data, arg.data);
        } else if (arg.channel == "set_auth_token2") {
          NodeFetch$1.setTokens("", atob(arg.data));
        } else if (arg.channel == "odds_window_create") {
          const window = new electron.BrowserWindow({
            title: "선택경기 모든 배당",
            height: 800,
            width: 900,
            show: false,
            webPreferences: {
              devTools: utils.is.dev,
              preload: path__namespace.join(__dirname, "../preload/main.js"),
              sandbox: false
            }
          });
          window.menuBarVisible = false;
          if (utils.is.dev && process.env["ELECTRON_RENDERER_URL"]) {
            window.loadURL(`${process.env["ELECTRON_RENDERER_URL"]}/odds.html?match_id=${arg.data}`);
          } else {
            window.loadFile(path__namespace.join(__dirname, `../renderer/odds.html`), {
              query: { match_id: arg.data }
            });
          }
          window.once("ready-to-show", () => {
            window.setTitle("선택경기 모든 배당");
            setTimeout(() => {
              window.show();
            }, 500);
          });
        } else if (arg.channel == "chat_window_create") {
          const windows = electron.BrowserWindow.getAllWindows().filter((item) => {
            return item.getURL().indexOf("/chat.html?username=") > -1;
          });
          if (windows.length > 0) {
            windows[0].show();
          } else {
            const window = new electron.BrowserWindow({
              title: "자비스 실시간 채팅문의",
              height: 800,
              width: 400,
              show: false,
              webPreferences: {
                devTools: utils.is.dev,
                preload: path__namespace.join(__dirname, "../preload/main.js"),
                sandbox: false
              }
            });
            window.menuBarVisible = false;
            if (utils.is.dev && process.env["ELECTRON_RENDERER_URL"]) {
              window.loadURL(
                `${process.env["ELECTRON_RENDERER_URL"]}/chat.html?username=${arg.data}`
              );
            } else {
              window.loadFile(path__namespace.join(__dirname, `../renderer/chat.html`), {
                query: { username: arg.data }
              });
            }
            window.once("ready-to-show", () => {
              window.setTitle("자비스 실시간 채팅문의");
              setTimeout(() => {
                window.show();
              }, 500);
            });
          }
        } else if (arg.channel == "chat_client_screenshot") {
          const windows = electron.BrowserWindow.getAllWindows().filter((item) => {
            return item.getURL().indexOf("/chat.html?username=") > -1;
          });
          if (windows.length > 0) {
            electron.desktopCapturer.getSources({
              types: ["screen"],
              thumbnailSize: arg.data
            }).then((sources) => {
              if (sources && sources.length > 0) {
                windows[0].webContents.send("MESSAGE", sources[0].thumbnail.toDataURL());
              }
            });
          }
        } else {
          this.mainWindow.webContents.send("MESSAGE", arg);
        }
      } catch (error) {
      }
    });
    const updater = new Updater(Main.mainWindow);
    updater.listen();
    Main.mainWindow.on("ready-to-show", () => {
      Main.mainWindow.setTitle("자비스");
      if (utils.is.dev && process.env["ELECTRON_RENDERER_URL"]) {
        Main.mainWindow.webContents.openDevTools({ mode: "detach" });
      }
      Main.mainWindow.show();
    });
    if (utils.is.dev && process.env["ELECTRON_RENDERER_URL"]) {
      Main.mainWindow.loadURL(process.env["ELECTRON_RENDERER_URL"] + "/main.html");
    } else {
      Main.mainWindow.loadFile(path__namespace.join(__dirname, "../renderer/main.html"));
    }
    Main.mainWindow.on("close", () => {
      electron.app.exit();
    });
  }
  // static main(browserWindow: typeof BrowserWindow): void {
  static main() {
    const gotTheLock = electron.app.requestSingleInstanceLock();
    if (!gotTheLock) {
      electron.app.exit();
    } else {
      electron.app.whenReady().then(() => Main.onReady());
      electron.app.on("second-instance", () => {
        if (Main.mainWindow) {
          if (Main.mainWindow.isMinimized() || !Main.mainWindow.isVisible()) {
            Main.mainWindow.show();
          }
          Main.mainWindow.focus();
        }
      });
      electron.app.once("window-all-closed", () => {
        electron.app.exit();
      });
    }
  }
}
Main.main();
