import loadExternal from "./getExternalGlobal";

const gapiPromise = loadExternal("https://apis.google.com/js/platform.js", "gapi");

gapiPromise.then((gapi) => {
  gapi.load("auth2", () => {
    gapi.auth2.init({});
  });
});

const auth = {
  renderLoginButton: (elementId, onSuccess, onfailure) => {
    gapiPromise.then((gapi) => {
      gapi.signin2.render(elementId, {"onsuccess": onSuccess, "onfailure": onfailure});
    });
  },

  logout: () => {
    gapiPromise.then((gapi) => {
      const auth2 = gapi.auth2.getAuthInstance();
      auth2.signOut();
    });
  }
};

export default auth;