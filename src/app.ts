import express from 'express';
import config from '../config'
import db from './models';

import graphiqlRoutes from './server/graphqlRotes';

const app = express();
app.set('port', config.PORT);

graphiqlRoutes(app);

db.sequelize.sync();

export default app;