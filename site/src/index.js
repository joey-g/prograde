import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter } from 'react-router-dom';

import App from './App';
import ScrollToTop from './components/ScrollToTop';
import registerServiceWorker from './registerServiceWorker';
import withTracker from './withTracker';

import 'font-awesome/css/font-awesome.min.css';
import './index.css';

ReactDOM.render((
    <BrowserRouter>
        <ScrollToTop>
            <Route component={withTracker(App)}/>
        </ScrollToTop>
    </BrowserRouter>),
    document.getElementById('root')
);
registerServiceWorker();
