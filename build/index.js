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

// app/routes/weather.forecast.$cityName.tsx
var weather_forecast_cityName_exports = {};
__export(weather_forecast_cityName_exports, {
  loader: () => loader
});
import { json as json2 } from "@remix-run/react";

// app/services/tomorrowAPI.tsx
import { json } from "@remix-run/node";

// app/library/stringManagement.tsx
function convertToURLfriendly(string) {
  return string.replace(/ /g, "-").toLowerCase();
}

// app/services/tomorrowAPI.tsx
var getWeatherForecast = async (location) => {
  location = convertToURLfriendly(location);
  let tomorrowUrl = `${process.env.BASE_URL}/forecast?location=${location}`, data = await fetch(tomorrowUrl, {
    method: "GET",
    headers: {
      apikey: process.env.NIMBUS_API_KEY,
      // TODO SAVE IN.ENV
      accept: "application/json"
    }
  });
  return json(await data.json());
}, getRealTimeWeather = async (location) => {
  location = convertToURLfriendly(location);
  let tomorrowUrl = `${process.env.BASE_URL}/realtime?location=${location}`, data = await fetch(tomorrowUrl, {
    method: "GET",
    headers: {
      apikey: process.env.NIMBUS_API_KEY,
      // TODO SAVE IN.ENV
      accept: "application/json"
    }
  });
  return json(await data.json());
}, getWeatherRecentHistory = async (location) => {
  location = convertToURLfriendly(location);
  let tomorrowUrl = `${process.env.BASE_URL}/history/recent?location=${location}`, data = await fetch(tomorrowUrl, {
    method: "GET",
    headers: {
      apikey: process.env.NIMBUS_API_KEY,
      // TODO SAVE IN.ENV
      accept: "application/json"
    }
  });
  return json(await data.json());
};

// app/routes/weather.forecast.$cityName.tsx
var loader = async ({ params }) => {
  let { cityName } = params;
  if (!cityName)
    return json2({ error: "City name is missing" }, { status: 400 });
  try {
    return await getWeatherForecast(cityName);
  } catch (error) {
    return console.error("Error fetching weather data:", error), json2({ error: "Failed to fetch weather data" }, { status: 500 });
  }
};

// app/routes/weather.realtime.$cityName.tsx
var weather_realtime_cityName_exports = {};
__export(weather_realtime_cityName_exports, {
  loader: () => loader2
});
import { json as json3 } from "@remix-run/react";
var loader2 = async ({ params }) => {
  let { cityName } = params;
  if (!cityName)
    return json3({ error: "City name is missing" }, { status: 400 });
  try {
    return await getRealTimeWeather(cityName);
  } catch (error) {
    return console.error("Error fetching weather data:", error), json3({ error: "Failed to fetch weather data" }, { status: 500 });
  }
};

// app/routes/weather.history.$cityName.tsx
var weather_history_cityName_exports = {};
__export(weather_history_cityName_exports, {
  loader: () => loader3
});
import { json as json4 } from "@remix-run/react";
var loader3 = async ({ params }) => {
  let { cityName } = params;
  if (!cityName)
    return json4({ error: "City name is missing" }, { status: 400 });
  try {
    return await getWeatherRecentHistory(cityName);
  } catch (error) {
    return console.error("Error fetching weather data:", error), json4({ error: "Failed to fetch weather data" }, { status: 500 });
  }
};

// app/routes/user.tsx
var user_exports = {};
__export(user_exports, {
  default: () => UserApi,
  loader: () => loader4
});
import { json as json5 } from "@remix-run/react";

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
  return json5(users, { headers: { "Cache-Control": "no-store" } });
};
function UserApi() {
  return (
    // JSON.stringify(useLoaderData<typeof loader>())
    "hi from user.tsx"
  );
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { entry: { module: "/build/entry.client-URQ7IOUN.js", imports: ["/build/_shared/chunk-ZWGWGGVF.js", "/build/_shared/chunk-XU7DNSPJ.js", "/build/_shared/chunk-LSNQPJDP.js", "/build/_shared/chunk-DM4554CJ.js", "/build/_shared/chunk-GIAAE3CH.js", "/build/_shared/chunk-BOXFZXVX.js", "/build/_shared/chunk-UWV35TSL.js", "/build/_shared/chunk-PNG5AS42.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-IGSPRLF6.js", imports: void 0, hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !0 }, "routes/user": { id: "routes/user", parentId: "root", path: "user", index: void 0, caseSensitive: void 0, module: "/build/routes/user-P6HEPSCS.js", imports: void 0, hasAction: !1, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/weather.forecast.$cityName": { id: "routes/weather.forecast.$cityName", parentId: "root", path: "weather/forecast/:cityName", index: void 0, caseSensitive: void 0, module: "/build/routes/weather.forecast.$cityName-P7RCBGOC.js", imports: void 0, hasAction: !1, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/weather.history.$cityName": { id: "routes/weather.history.$cityName", parentId: "root", path: "weather/history/:cityName", index: void 0, caseSensitive: void 0, module: "/build/routes/weather.history.$cityName-H65TCG7E.js", imports: void 0, hasAction: !1, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/weather.realtime.$cityName": { id: "routes/weather.realtime.$cityName", parentId: "root", path: "weather/realtime/:cityName", index: void 0, caseSensitive: void 0, module: "/build/routes/weather.realtime.$cityName-KDSK4HY5.js", imports: void 0, hasAction: !1, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 } }, version: "96aaa349", hmr: { runtime: "/build/_shared/chunk-DM4554CJ.js", timestamp: 1705367705401 }, url: "/build/manifest-96AAA349.js" };

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
  "routes/weather.forecast.$cityName": {
    id: "routes/weather.forecast.$cityName",
    parentId: "root",
    path: "weather/forecast/:cityName",
    index: void 0,
    caseSensitive: void 0,
    module: weather_forecast_cityName_exports
  },
  "routes/weather.realtime.$cityName": {
    id: "routes/weather.realtime.$cityName",
    parentId: "root",
    path: "weather/realtime/:cityName",
    index: void 0,
    caseSensitive: void 0,
    module: weather_realtime_cityName_exports
  },
  "routes/weather.history.$cityName": {
    id: "routes/weather.history.$cityName",
    parentId: "root",
    path: "weather/history/:cityName",
    index: void 0,
    caseSensitive: void 0,
    module: weather_history_cityName_exports
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
