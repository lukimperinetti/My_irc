import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

/**
 * Ici je dis "Tout ce qui va être créé en react, va transiter dans App avant d'aller dans la div root qui se trouve dans index.js"
 * je rappel que c'est index.js qui va se lancer en premier
 */
ReactDOM.render(<App />, document.querySelector('#root'));