function loadDevTools(callback, features) {
    // this allows you to explicitly disable it in development for example
    const explicitlyDisabled =
      window.location.search.includes('dev-tools=false') || window.localStorage.getItem('dev-tools') === 'false';
  
    const explicitlyEnabled =
      window.location.search.includes('dev-tools=true') || window.localStorage.getItem('dev-tools') === 'true';
  
    // we want it enabled by default everywhere but production and we also want
    // to support the dev tools in production (to make us more productive triaging production issues).
    // you can enable the DevTools via localStorage or the query string.
    const devEnviroments = ["dev","develop","development"];
    if (!explicitlyDisabled && (devEnviroments.includes(process.env.NODE_ENV) || explicitlyEnabled)) {
      // use a dynamic import so the dev-tools code isn't bundled with the regular
      // app code so we don't worry about bundle size.
      import('./install')
        .then(devTools => devTools.install(features))
        .finally(callback);
    } else {
      // if we don't need the DevTools, call the callback immediately.
      callback();
    }
  }
  
  export default loadDevTools;
  export { loadDevTools }

  