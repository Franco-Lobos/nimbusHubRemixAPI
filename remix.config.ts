/** @type {import('@remix-run/dev').AppConfig} */

// const expressRoutes: any = require('./path-to-express-routes');

export default{
    appDirectory: "app",
    ignoredRouteFiles: ["**/.*"],
    assetsBuildDirectory: "public/build",
    routes:{
      '/weather': require.resolve('./app/routes/weather.tsx'),
    },
    loaderSideEffects: true,

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
        // expressMiddleware: expressRoutes,
      }
    },
  };


  
