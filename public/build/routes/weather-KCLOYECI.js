import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XU7DNSPJ.js";
import "/build/_shared/chunk-BK6G5P5H.js";
import "/build/_shared/chunk-2UEIZ2UP.js";
import "/build/_shared/chunk-GIAAE3CH.js";
import {
  createHotContext
} from "/build/_shared/chunk-DM4554CJ.js";
import "/build/_shared/chunk-UWV35TSL.js";
import "/build/_shared/chunk-BOXFZXVX.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/routes/weather.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/weather.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/weather.tsx"
  );
  import.meta.hot.lastModified = "1705081981722.8252";
}
function Weather() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { children: '"hi from weather.tsx"' }, void 0, false, {
    fileName: "app/routes/weather.tsx",
    lineNumber: 41,
    columnNumber: 10
  }, this);
}
_c = Weather;
var _c;
$RefreshReg$(_c, "Weather");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Weather as default
};
//# sourceMappingURL=/build/routes/weather-KCLOYECI.js.map
