import { Express, Request, Response, NextFunction } from 'express'
import cors from 'cors';
import { graphqlHTTP } from 'express-graphql';

import graphqlConfig from '../graphql/graphqlConfig';

const corsOptions = {
  origin: '*',
}

export default (app: Express) => {
  app.use(cors(corsOptions));

  app.use('/graphql',
    graphqlHTTP({
      schema: graphqlConfig.schema,
      graphiql: false,
      rootValue: graphqlConfig.root,
      pretty: true,
    }),
  );
}