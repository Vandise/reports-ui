/*global global*/
import Q from "q";

let deferreds = {};
let loadCache = {};

function load(url) {
  // Don't load twice.
  if (loadCache[url] === false) { return; }
  loadCache[url] = false;

  let script = global.document.createElement("script");
  script.async = true;
  script.defer = true;
  script.src   = url;
  script.onload = function() {
    loadCache[url] = true;
    (deferreds[url] || []).forEach(function(request) {
      request[0].resolve(global[request[1]]);
    });
  };
  let fs = global.document.getElementsByTagName("script")[0];
  fs.parentNode.insertBefore(script, fs);
}

export default function(url, name) {
  let deferred = Q.defer();
  loadCache[url]
    ? deferred.resolve(global[name])
    : (deferreds[url] = deferreds[url] || []).push([deferred, name]) && load(url);
  return deferred.promise;
}