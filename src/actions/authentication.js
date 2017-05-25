import { createAction } from 'redux-actions';
import Server       from '../util/server';
import * as Cookie  from '../util/cookie';

export const LOGIN_ATTEMPT = createAction(
  'LOGIN', (email, token) => {
    return Server.authentication.login(email, token).then(resp => {
      const user = resp.data.user;
      console.log(resp.data);
      Cookie.setAccessToken(resp.data.token);
      Cookie.login(user);
      return resp.data.user;
    }).fail(() => {
      Cookie.logout();
      return {
        error: 'No account found for that email.'
      };
    });
  }
);