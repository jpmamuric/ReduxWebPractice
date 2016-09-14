import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, browserHistory, Route, IndexRoute, Redirect} from 'react-router';
import { syncHistoryWithStore, routerMiddleware, push } from 'react-router-redux'
import ReduxPromise from 'redux-promise';

import reducers from './reducers';
import App from './components/app';
import HomePage from './components/home';
import MenuPage from './components/menu';
import LocationPage from './components/location';
import ContactPage from './components/contact';
import AboutPage from './components/about';
import CateringPage from './components/catering';
import ErrorPage from './components/error';

const middleware = routerMiddleware(browserHistory);
const store = createStore(
    reducers,
    applyMiddleware(ReduxPromise, middleware)
);

const history = syncHistoryWithStore( browserHistory, store);

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path='/' component={App} >
        <IndexRoute component={HomePage}/>
        <Route path="/menu" component={MenuPage}/>
        <Route path="/contact" component={ContactPage}/>
        <Route path="/location" component={LocationPage}/>
        <Route path="/about_us" component={AboutPage}/>
        <Route path="/catering" component={CateringPage}/>
        <Route path="/*" component={ErrorPage} />
      </Route>
    </Router>
  </Provider>
  , document.querySelector('.container-fluid'));
