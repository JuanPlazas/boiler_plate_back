import db from '../../models';
import awaitToJs from 'await-to-js';

const createUser = async (args: any) => {
  const {
    type,
    name,
    lastName,
    email,
    user,
    password,
  } = args.input;

  const [error, response] = await awaitToJs(db.User.create({
    type,
    name,
    lastName,
    email,
    user,
    password,
  }));

  if (error) {
    console.log('24 error >>>>>>', error);
    throw error;
  }

  return response;
}

export {
  createUser,
}