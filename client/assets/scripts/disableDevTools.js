(function() {
  if (typeof window !== undefined && window.__REACT_DEVTOOLS_GLOBAL_HOOK__) {
    window.__REACT_DEVTOOLS_GLOBAL_HOOK__.inject = function () {}
  }
  if (typeof window !== undefined && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) {
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ = null;
  }
})();