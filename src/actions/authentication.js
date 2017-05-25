import { createAction } from 'redux-actions';
import Server from '../util/server';
import Auth from '../util/googleAuth';
import * as Cookie from '../util/cookie';

export const LOGIN_ATTEMPT = createAction(
  'LOGIN', (email, token) => {
    return Server.authentication.login(email, token).then(resp => {
      const user = resp.data.user;
      Cookie.setAccessToken(resp.data.token.access_token);
      Cookie.login(user);
      return resp.data.user;
    }).fail(() => {
      Cookie.logout();
      Auth.logout();
      return {
        error: 'No account found for that email.'
      };
    });
  }
);

export const LOGOUT = createAction(
  'LOGOUT', () => {
    Cookie.logout();
    Auth.logout();
    return true;
  }
);