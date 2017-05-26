import { API_ROOT }   from "Src/constants";
import Q              from "q";
// eslint-disable-next-line no-unused-vars
import qXhr           from 'q-xhr';

export const login = (email, token) => {
  return Q.xhr.post(`${API_ROOT}/login`, { email, token });
};

export const logout = () => {
  return Q.xhr.post(`${API_ROOT}/logout`);
};