import "/build/_shared/chunk-OSXURRHE.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XU7DNSPJ.js";
import {
  useLoaderData
} from "/build/_shared/chunk-LSNQPJDP.js";
import {
  createHotContext
} from "/build/_shared/chunk-DM4554CJ.js";
import "/build/_shared/chunk-GIAAE3CH.js";
import "/build/_shared/chunk-BOXFZXVX.js";
import "/build/_shared/chunk-UWV35TSL.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/routes/weather.forecast.$cityName.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/weather.forecast.$cityName.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/weather.forecast.$cityName.tsx"
  );
  import.meta.hot.lastModified = "1705091547117.7866";
}
function WeatherForecast({
  request
}) {
  _s();
  const data = useLoaderData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: data.error ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: [
    "Error: ",
    data.error
  ] }, void 0, true, {
    fileName: "app/routes/weather.forecast.$cityName.tsx",
    lineNumber: 56,
    columnNumber: 21
  }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "whitespace-pre-wrap break-words overflow-x-auto max-w-full", children: JSON.stringify(data) }, void 0, false, {
    fileName: "app/routes/weather.forecast.$cityName.tsx",
    lineNumber: 56,
    columnNumber: 50
  }, this) }, void 0, false, {
    fileName: "app/routes/weather.forecast.$cityName.tsx",
    lineNumber: 55,
    columnNumber: 10
  }, this);
}
_s(WeatherForecast, "5thj+e1edPyRpKif1JmVRC6KArE=", false, function() {
  return [useLoaderData];
});
_c = WeatherForecast;
var _c;
$RefreshReg$(_c, "WeatherForecast");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  WeatherForecast as default
};
//# sourceMappingURL=/build/routes/weather.forecast.$cityName-FJXABFX6.js.map
