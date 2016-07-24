import { provideRouter, RouterConfig } from '@angular/router';

import { AboutRoutes } from './+about/index';
import { HomeRoutes } from './+home/index';
import { SimpleGameRoutes } from './+simplegame/index';

const routes: RouterConfig = [
  ...HomeRoutes,
  ...AboutRoutes,
  ...SimpleGameRoutes
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes),
];
