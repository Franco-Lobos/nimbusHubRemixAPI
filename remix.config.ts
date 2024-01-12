/** @type {import('@remix-run/dev').AppConfig} */

const expressRoutes: any = require('./path-to-express-routes');

export default{
    appDirectory: "app",
    ignoredRouteFiles: ["**/.*"],
    assetsBuildDirectory: "public/build",
    // routes:{
    //   '/user': require.resolve('./app/routes/user.tsx'),
    // },
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
        expressMiddleware: expressRoutes,
      }
    },
  };

  
  
