import React from 'react';
import ReactDOM from 'react-dom';
import './list.styles.css';
import List from './list.component';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<List />, document.getElementById('root'));
registerServiceWorker();
