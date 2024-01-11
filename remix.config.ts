/** @type {import('@remix-run/dev').AppConfig} */
module.exports = {
    appDirectory: "app",
    ignoredRouteFiles: ["**/.*"],
    assetsBuildDirectory: "public/build",
    browserNodeBuiltinsPolyfill: {
      modules: {
        fs: 'empty',
        worker_threads: 'empty',
        process: 'empty',
        "stream/web": 'empty',
        buffer: 'empty',
        path: true,
        os: true,
        crypto: true, 
        net: true, 

      }
    },
  };

  
  