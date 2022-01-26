import { IRoute } from './model/route.model';
import { Developers } from "../features/trending/pages/developers";
import { Repositories } from "../features/trending/pages/repositories";

export const ROUTES: IRoute[] = [
  { path: '/', key: 'Repositories', exact: true, component: Repositories },
  { path: '/developers', key: 'Developers', exact: true, component: Developers },
];
