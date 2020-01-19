import { Router } from 'express';
import devController from './controller/dev.controller';
import searchController from './controller/search.controller';

const routes = Router();

routes.get('/devs', devController.index);
// TODO: routes.get('/devs', devController.show);
routes.post('/devs',  devController.store);
// TODO: routes.put('/devs', devController.update);
// TODO: routes.delete('/devs', devController.destroy);

routes.get('/search', searchController.index);

export default routes;
