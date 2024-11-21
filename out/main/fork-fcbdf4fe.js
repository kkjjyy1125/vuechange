"use strict";
const Cheerio = require("cheerio");
const jsonpathPlus = require("jsonpath-plus");
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
const Cheerio__namespace = /* @__PURE__ */ _interopNamespaceDefault(Cheerio);
const isNumeric = (num, opt = "1") => {
  num = String(num).replace(/^\s+|\s+$/g, "");
  let regex = /^[0-9]$/g;
  if (typeof opt == "undefined" || opt == "1") {
    regex = /^[+-]?(([1-9][0-9]{0,2}(,[0-9]{3})*)|[0-9]+){1}(\.[0-9]+)?$/g;
  } else if (opt == "2") {
    regex = /^(([1-9][0-9]{0,2}(,[0-9]{3})*)|[0-9]+){1}(\.[0-9]+)?$/g;
  } else if (opt == "3") {
    regex = /^[0-9]+(\.[0-9]+)?$/g;
  }
  if (regex.test(num)) {
    num = num.replace(/,/g, "");
    return isNaN(num) ? false : true;
  } else {
    return false;
  }
};
const groupGames = (games) => {
  if (!games || games.length == 0)
    return [];
  games = games.filter((item) => {
    if (item.league_name && item.datetime && item.home_team_name && item.home_team_name.length < 100 && item.away_team_name && item.away_team_name.length < 100 && isNumeric(item.home) && isNumeric(item.draw) && isNumeric(item.away) && (item.type == "moneyline" || item.type == "spread" || item.type == "total") && isNumeric(item.period) && isNumeric(item.point)) {
      return item;
    }
  });
  if (!games || games.length == 0)
    return [];
  return games.reduce((rows, item) => {
    if (rows.find(
      (row) => row.league_name == item.league_name && row.datetime == item.datetime && row.home_team_name == item.home_team_name && row.away_team_name == item.away_team_name
    )) {
      return rows.map((row) => {
        if (row.league_name == item.league_name && row.datetime == item.datetime && row.home_team_name == item.home_team_name && row.away_team_name == item.away_team_name) {
          row.games.push({
            type: item.type,
            period: item.period,
            point: item.point,
            home: item.home,
            draw: item.draw,
            away: item.away
          });
        }
        return row;
      });
    } else {
      return [
        ...rows,
        {
          league_name: item.league_name,
          datetime: item.datetime,
          home_team_name: item.home_team_name,
          away_team_name: item.away_team_name,
          games: [
            {
              type: item.type,
              period: item.period,
              point: item.point,
              home: item.home,
              draw: item.draw,
              away: item.away
            }
          ]
        }
      ];
    }
  }, []);
};
process.parentPort.on("message", (message) => {
  let parseData;
  try {
    parseData = message.data.url_response ? new Function(
      "Cheerio",
      "html",
      "JSONPath",
      `${message.data.script}; return parser(Cheerio, html, JSONPath);`
    )(Cheerio__namespace, message.data.html, jsonpathPlus.JSONPath) : new Function("Cheerio", "html", `${message.data.script}; return parser(Cheerio, html);`)(
      Cheerio__namespace,
      message.data.html
    );
    process.parentPort.postMessage(groupGames(parseData));
  } catch (e) {
    process.parentPort.postMessage([]);
  } finally {
    parseData = null;
    message = null;
    process.exit();
  }
});
