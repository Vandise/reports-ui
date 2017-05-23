import loadExternal from "./getExternalGlobal";

let gapiPromise = loadExternal("https://apis.google.com/js/platform.js", "gapi");

gapiPromise.then((gapi) => {
  gapi.load("auth2", () => {
    gapi.auth2.init({
      hosted_domain: undefined
    });
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
      var auth2 = gapi.auth2.getAuthInstance();
      auth2.signOut();
    });
  }
};

export default auth;