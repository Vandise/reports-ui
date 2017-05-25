/*global global*/

const TOKEN_COOKIE = 'reports_system_token';

export function all() {
  return (
    global.document
    ? global.document.cookie.split(";")
    : []
  );
}

export function getAccessToken() {
  let token = null;

  all().forEach(cookie => {
    let pair = cookie.trim().split("=");
    if (pair[0] === TOKEN_COOKIE) {
      token = pair[1];
      token = token.split(" ")[0];
    }
  });

  return token;
}

export function getCurrentUser() {
  return JSON.parse(window.localStorage.getItem("user"));
}

export function login(user) {
  console.log(getAccessToken(), global.document);
  if (getAccessToken() && global.document) {
    global.document.cookie = "login=true";
    window.localStorage.setItem("user", JSON.stringify(user));
  }
}

export function logout() {
  if (global.document) {
    global.document.cookie = "login=false";
    window.localStorage.clear();
  }
}

export function isLoggedIn() {
  return !!getAccessToken()
    && global.document
    && global.document.cookie.indexOf("login=true") !== -1;
}

export function setAccessToken(token) {
  let d = new Date();
  d.setTime(d.getTime() + (1000 * 60 * 60 * 24 * 7));
  document.cookie = `${TOKEN_COOKIE}=${token}; expires=${d.toUTCString()}; path=/;`;
}