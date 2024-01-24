var __defProp = Object.defineProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
};

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
import { PassThrough } from "node:stream";
import { createReadableStreamFromReadable } from "@remix-run/node";
import { RemixServer } from "@remix-run/react";
import isbot from "isbot";
import { renderToPipeableStream } from "react-dom/server";
import { jsxDEV } from "react/jsx-dev-runtime";
var ABORT_DELAY = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, remixContext, loadContext) {
  return isbot(request.headers.get("user-agent")) ? handleBotRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  ) : handleBrowserRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  );
}
function handleBotRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = !1, { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ jsxDEV(
        RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        },
        void 0,
        !1,
        {
          fileName: "app/entry.server.tsx",
          lineNumber: 42,
          columnNumber: 7
        },
        this
      ),
      {
        onAllReady() {
          shellRendered = !0;
          let body = new PassThrough(), stream = createReadableStreamFromReadable(body);
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500, shellRendered && console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}
function handleBrowserRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = !1, { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ jsxDEV(
        RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        },
        void 0,
        !1,
        {
          fileName: "app/entry.server.tsx",
          lineNumber: 92,
          columnNumber: 7
        },
        this
      ),
      {
        onShellReady() {
          shellRendered = !0;
          let body = new PassThrough(), stream = createReadableStreamFromReadable(body);
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500, shellRendered && console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}

// app/root.tsx
var root_exports = {};
__export(root_exports, {
  ErrorBoundary: () => ErrorBoundary,
  default: () => Root
});
import { Outlet, LiveReload } from "@remix-run/react";
import {
  isRouteErrorResponse,
  useRouteError
} from "@remix-run/react";
import { Fragment, jsxDEV as jsxDEV2 } from "react/jsx-dev-runtime";
function ErrorBoundary() {
  let error = useRouteError();
  return isRouteErrorResponse(error) ? /* @__PURE__ */ jsxDEV2("div", { children: [
    /* @__PURE__ */ jsxDEV2("h1", { children: [
      error.status,
      " ",
      error.statusText
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 14,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV2("p", { children: error.data }, void 0, !1, {
      fileName: "app/root.tsx",
      lineNumber: 17,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.tsx",
    lineNumber: 13,
    columnNumber: 7
  }, this) : error instanceof Error ? /* @__PURE__ */ jsxDEV2("div", { children: [
    /* @__PURE__ */ jsxDEV2("h1", { children: "Error" }, void 0, !1, {
      fileName: "app/root.tsx",
      lineNumber: 23,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV2("p", { children: error.message }, void 0, !1, {
      fileName: "app/root.tsx",
      lineNumber: 24,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV2("p", { children: "The stack trace is:" }, void 0, !1, {
      fileName: "app/root.tsx",
      lineNumber: 25,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV2("pre", { children: error.stack }, void 0, !1, {
      fileName: "app/root.tsx",
      lineNumber: 26,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.tsx",
    lineNumber: 22,
    columnNumber: 7
  }, this) : /* @__PURE__ */ jsxDEV2("h1", { children: "Unknown Error" }, void 0, !1, {
    fileName: "app/root.tsx",
    lineNumber: 30,
    columnNumber: 12
  }, this);
}
function Root() {
  return /* @__PURE__ */ jsxDEV2(Fragment, { children: [
    /* @__PURE__ */ jsxDEV2(Outlet, {}, void 0, !1, {
      fileName: "app/root.tsx",
      lineNumber: 38,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV2(LiveReload, {}, void 0, !1, {
      fileName: "app/root.tsx",
      lineNumber: 39,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.tsx",
    lineNumber: 37,
    columnNumber: 5
  }, this);
}

// app/routes/weather.forecast.$cityLoc.tsx
var weather_forecast_cityLoc_exports = {};
__export(weather_forecast_cityLoc_exports, {
  loader: () => loader
});
import { json } from "@remix-run/react";

// app/library/stringManagement.tsx
function convertToURLfriendly(string) {
  return string.replace(/ /g, "-").toLowerCase();
}

// app/services/tomorrowAPI.tsx
var getWeatherForecast = async (location) => {
  console.log("LOCATION-FORE:", location);
  let tomorrowUrl = `${process.env.BASE_URL}/forecast?location=${location}`;
  return await (await fetch(tomorrowUrl, {
    method: "GET",
    headers: {
      apikey: process.env.NIMBUS_API_KEY,
      // TODO SAVE IN.ENV
      accept: "application/json"
    }
  })).json();
}, getRealTimeWeather = async (location) => {
  location = convertToURLfriendly(location);
  let tomorrowUrl = `${process.env.BASE_URL}/realtime?location=${location}`;
  return await (await fetch(tomorrowUrl, {
    method: "GET",
    headers: {
      apikey: process.env.NIMBUS_API_KEY,
      // TODO SAVE IN.ENV
      accept: "application/json"
    }
  })).json();
}, getWeatherRecentHistory = async (location) => {
  location = convertToURLfriendly(location);
  let tomorrowUrl = `${process.env.BASE_URL}/history/recent?location=${location}`;
  return await (await fetch(tomorrowUrl, {
    method: "GET",
    headers: {
      apikey: process.env.NIMBUS_API_KEY,
      // TODO SAVE IN.ENV
      accept: "application/json"
    }
  })).json();
};

// app/services/APIAdapter.tsx
function convertMinutelyItem(apiMinutelyItem) {
  return {
    time: apiMinutelyItem.time,
    values: {
      temperature: apiMinutelyItem.values.temperature,
      temperatureApparent: apiMinutelyItem.values.temperatureApparent,
      weatherCode: apiMinutelyItem.values.weatherCode
      // Add other properties as needed
    }
  };
}
function convertHourlyItem(apiHourlyItem) {
  return {
    time: apiHourlyItem.time,
    values: {
      temperature: apiHourlyItem.values.temperature,
      temperatureApparent: apiHourlyItem.values.temperatureApparent,
      weatherCode: apiHourlyItem.values.weatherCode
      // Add other properties as needed
    }
  };
}
function convertDailyItem(apiDailyItem) {
  return {
    time: apiDailyItem.time,
    values: {
      temperatureApparentAvg: apiDailyItem.values.temperatureApparentAvg,
      temperatureApparentMax: apiDailyItem.values.temperatureApparentMax,
      temperatureApparentMin: apiDailyItem.values.temperatureApparentMin,
      temperatureAvg: apiDailyItem.values.temperatureAvg,
      temperatureMax: apiDailyItem.values.temperatureMax,
      temperatureMin: apiDailyItem.values.temperatureMin,
      weatherCodeMax: apiDailyItem.values.weatherCodeMax,
      weatherCodeMin: apiDailyItem.values.weatherCodeMin
      // Add other properties as needed
    }
  };
}
function convertWeatherLocation(apiLocation) {
  return {
    lat: apiLocation.lat,
    lon: apiLocation.lon,
    name: apiLocation.name,
    type: apiLocation.type
  };
}
function convertForecastData(apiForecastData) {
  return {
    timelines: {
      minutely: apiForecastData.timelines.minutely.map(convertMinutelyItem),
      hourly: apiForecastData.timelines.hourly.map(convertHourlyItem),
      daily: apiForecastData.timelines.daily.map(convertDailyItem)
    },
    location: convertWeatherLocation(apiForecastData.location)
  };
}
function convertRealTimeData(apiRealTimeData) {
  return {
    data: convertMinutelyItem(apiRealTimeData.data),
    location: convertWeatherLocation(apiRealTimeData.location)
  };
}
function convertHistoryData(apiHistoryData) {
  return {
    timelines: {
      hourly: apiHistoryData.timelines.hourly.map(convertHourlyItem),
      daily: apiHistoryData.timelines.daily.map(convertDailyItem)
    },
    location: convertWeatherLocation(apiHistoryData.location)
  };
}

// app/utils/ErrorManager.tsx
var ErrorManager = (errorCode) => {
  switch (errorCode) {
    case 400:
      return {
        code: 400,
        type: "SERVER" /* SERVER */,
        message: "User or Password are null"
      };
    case 401:
      return {
        code: 401,
        type: "SERVER" /* SERVER */,
        message: "Unauthorized, please log in"
      };
    case 402:
      return {
        code: 402,
        type: "SERVER" /* SERVER */,
        message: "Location not provided"
      };
    case 403:
      return {
        code: 403,
        type: "SERVER" /* SERVER */,
        message: "Your session has expired. Please log in again."
      };
    case 404:
      return {
        code: 404,
        type: "SERVER" /* SERVER */,
        message: "The requested resource was not found."
      };
    case 500:
      return {
        code: 500,
        type: "SERVER" /* SERVER */,
        message: "The server is not responding. Please try again later."
      };
    default:
      return {
        code: 500,
        type: "SERVER" /* SERVER */,
        message: "An unknown error has occurred. Please try again later."
      };
  }
};

// app/routes/weather.forecast.$cityLoc.tsx
var loader = async ({ params }) => {
  let { cityLoc } = params;
  if (!cityLoc)
    return json(ErrorManager(402), { status: 402 });
  try {
    let parsedData = await getWeatherForecast(cityLoc);
    return convertForecastData(parsedData);
  } catch {
    return json(ErrorManager(500), { status: 500 });
  }
};

// app/routes/weather.realtime.$cityLoc.tsx
var weather_realtime_cityLoc_exports = {};
__export(weather_realtime_cityLoc_exports, {
  loader: () => loader2
});
import { json as json2 } from "@remix-run/react";
var loader2 = async ({ params }) => {
  let { cityLoc } = params;
  if (!cityLoc)
    return json2(ErrorManager(402), { status: 402 });
  try {
    let parsedData = await getRealTimeWeather(cityLoc);
    return convertRealTimeData(parsedData);
  } catch (error) {
    return console.error("Error fetching weather data:", error), json2(ErrorManager(500), { status: 500 });
  }
};

// app/routes/weather.history.$cityLoc.tsx
var weather_history_cityLoc_exports = {};
__export(weather_history_cityLoc_exports, {
  loader: () => loader3
});
import { json as json3 } from "@remix-run/react";
var loader3 = async ({ params }) => {
  let { cityLoc } = params;
  if (!cityLoc)
    return json3(ErrorManager(402), { status: 402 });
  try {
    let parsedData = await getWeatherRecentHistory(cityLoc);
    return convertHistoryData(parsedData);
  } catch {
    return json3(ErrorManager(500), { status: 500 });
  }
};

// app/routes/delete.auth.google.tsx
var delete_auth_google_exports = {};

// app/routes/user.tsx
var user_exports = {};
__export(user_exports, {
  default: () => UserApi,
  loader: () => loader4
});
import { json as json4 } from "@remix-run/react";

// dbConnection/models/users.ts
import mongoose from "mongoose";
var UserSchema = new mongoose.Schema({
  username: { type: String, required: !0 },
  email: { type: String, required: !0, unique: !0 },
  authentication: {
    password: { type: String, required: !0, select: !1 },
    salt: { type: String, select: !1 },
    sessionToken: { type: String, select: !1 }
  }
}), UserModule = mongoose.models.User || mongoose.model("User", UserSchema), getUsers = () => UserModule.find();

// app/routes/user.tsx
var loader4 = async ({ request }) => {
  let users = await getUsers();
  return json4(users, { headers: { "Cache-Control": "no-store" } });
};
function UserApi() {
  return (
    // JSON.stringify(useLoaderData<typeof loader>())
    "hi from user.tsx"
  );
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { entry: { module: "/build/entry.client-MYKGV6DR.js", imports: ["/build/_shared/chunk-ZWGWGGVF.js", "/build/_shared/chunk-XU7DNSPJ.js", "/build/_shared/chunk-KAESSHAP.js", "/build/_shared/chunk-DM4554CJ.js", "/build/_shared/chunk-UWV35TSL.js", "/build/_shared/chunk-GIAAE3CH.js", "/build/_shared/chunk-BOXFZXVX.js", "/build/_shared/chunk-PNG5AS42.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-KPB2442H.js", imports: void 0, hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !0 }, "routes/delete.auth.google": { id: "routes/delete.auth.google", parentId: "root", path: "delete/auth/google", index: void 0, caseSensitive: void 0, module: "/build/routes/delete.auth.google-4F5OOIXZ.js", imports: void 0, hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/user": { id: "routes/user", parentId: "root", path: "user", index: void 0, caseSensitive: void 0, module: "/build/routes/user-4Z7RRXZH.js", imports: void 0, hasAction: !1, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/weather.forecast.$cityLoc": { id: "routes/weather.forecast.$cityLoc", parentId: "root", path: "weather/forecast/:cityLoc", index: void 0, caseSensitive: void 0, module: "/build/routes/weather.forecast.$cityLoc-HYB6VM6W.js", imports: void 0, hasAction: !1, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/weather.history.$cityLoc": { id: "routes/weather.history.$cityLoc", parentId: "root", path: "weather/history/:cityLoc", index: void 0, caseSensitive: void 0, module: "/build/routes/weather.history.$cityLoc-QBPA4YYW.js", imports: void 0, hasAction: !1, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/weather.realtime.$cityLoc": { id: "routes/weather.realtime.$cityLoc", parentId: "root", path: "weather/realtime/:cityLoc", index: void 0, caseSensitive: void 0, module: "/build/routes/weather.realtime.$cityLoc-S6I2E5G2.js", imports: void 0, hasAction: !1, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 } }, version: "d5c5c338", hmr: { runtime: "/build/_shared/chunk-DM4554CJ.js", timestamp: 1706137631212 }, url: "/build/manifest-D5C5C338.js" };

// server-entry-module:@remix-run/dev/server-build
var mode = "development", assetsBuildDirectory = "public/build", future = { v3_fetcherPersist: !1, v3_relativeSplatPath: !1 }, publicPath = "/build/", entry = { module: entry_server_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/weather.forecast.$cityLoc": {
    id: "routes/weather.forecast.$cityLoc",
    parentId: "root",
    path: "weather/forecast/:cityLoc",
    index: void 0,
    caseSensitive: void 0,
    module: weather_forecast_cityLoc_exports
  },
  "routes/weather.realtime.$cityLoc": {
    id: "routes/weather.realtime.$cityLoc",
    parentId: "root",
    path: "weather/realtime/:cityLoc",
    index: void 0,
    caseSensitive: void 0,
    module: weather_realtime_cityLoc_exports
  },
  "routes/weather.history.$cityLoc": {
    id: "routes/weather.history.$cityLoc",
    parentId: "root",
    path: "weather/history/:cityLoc",
    index: void 0,
    caseSensitive: void 0,
    module: weather_history_cityLoc_exports
  },
  "routes/delete.auth.google": {
    id: "routes/delete.auth.google",
    parentId: "root",
    path: "delete/auth/google",
    index: void 0,
    caseSensitive: void 0,
    module: delete_auth_google_exports
  },
  "routes/user": {
    id: "routes/user",
    parentId: "root",
    path: "user",
    index: void 0,
    caseSensitive: void 0,
    module: user_exports
  }
};
export {
  assets_manifest_default as assets,
  assetsBuildDirectory,
  entry,
  future,
  mode,
  publicPath,
  routes
};
//# sourceMappingURL=index.js.map
