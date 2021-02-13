import jwt from 'jsonwebtoken';
import awaitToJs from 'await-to-js';

import db from '../../models';
import config from '../../../config';

const login: Login = async (args) => {
  console.log('8 login >>>>>>');
  const { user, password } = args.input;

  const [errorUser, responseUser] = await awaitToJs<any, Error>(db.User.findOne({
    attributes: [
      'id',
      'password'
    ],
    where: { user }
  }));
  if (errorUser) {
    throw errorUser;
  }
  if (!responseUser) {
    throw 'usuario no registrado';
  }

  if (password !== responseUser.password) {
    throw 'contraseña incorrecta';
  }

  const token = jwt.sign({ expiresIn: '1d' }, config.TOKEN_AUTH);

  const [errorLogin, responseLogin] = await awaitToJs(db.Login.findOne({
    attributes: [
      'id'
    ],
    where: { user }
  }));
  if (errorLogin) {
    throw errorLogin;
  }

  if (!responseLogin) {
    const [errorCreateLogin, responseCreateLogin] = await awaitToJs(db.Login.create({
      user,
      token,
    }));
    if (errorCreateLogin) {
      throw errorCreateLogin;
    }
  } else {
    const [errorUpdateLogin, responseUpdateLogin] = await awaitToJs(db.Login.update(
      { token },
      { where: { id: responseLogin.id } }
    ));
    if (errorUpdateLogin) {
      throw errorUpdateLogin;
    }
  }
  return { user, token };
}

export {
  login,
}