import React from 'react';
import ReactDOM from 'react-dom';
import DevTools from './DevTools';

import './dev-tools.scss';

const install = (features) => {
    window.devToolsEnabled = true;
    // load local dev tools if it's there
    const requireDevToolsLocal = require.context('./', false, /dev-tools\.local\.js/);
    const local = requireDevToolsLocal.keys()[0];
    let LocalDevTools;
    if (local) {
        LocalDevTools = requireDevToolsLocal(local).default;
    }
    LocalDevTools = LocalDevTools || (() => null);

    // add dev tools UI to the page
    const devToolsRoot = document.createElement('div');
    document.body.appendChild(devToolsRoot);
    ReactDOM.render( <DevTools features={features}/>, devToolsRoot);
}

export { install };
