import { registerApplication, start } from 'single-spa'
registerApplication(
  // Name of our single-spa application
  'angular-sample',
  // loadingFunction
  () => import('./src/main.single-spa'),
  // activityFunction
  (location) => location.pathname === "" || 
    location.pathname === "/" || 
    location.pathname.startsWith('/angular-sample')
);
start();