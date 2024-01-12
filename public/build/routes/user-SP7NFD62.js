import "/build/_shared/chunk-BK6G5P5H.js";
import "/build/_shared/chunk-2UEIZ2UP.js";
import "/build/_shared/chunk-GIAAE3CH.js";
import {
  createHotContext
} from "/build/_shared/chunk-DM4554CJ.js";
import "/build/_shared/chunk-UWV35TSL.js";
import "/build/_shared/chunk-BOXFZXVX.js";
import "/build/_shared/chunk-PNG5AS42.js";

// app/routes/user.tsx
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/user.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/user.tsx"
  );
  import.meta.hot.lastModified = "1705080802592.6633";
}
function UserApi() {
  return (
    // JSON.stringify(useLoaderData<typeof loader>())
    "hi from user.tsx"
  );
}
_c = UserApi;
var _c;
$RefreshReg$(_c, "UserApi");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  UserApi as default
};
//# sourceMappingURL=/build/routes/user-SP7NFD62.js.map
