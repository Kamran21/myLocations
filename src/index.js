import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';

import createHistory from 'history/createBrowserHistory';

import { ConnectedRouter} from 'react-router-redux';

import registerServiceWorker from './registerServiceWorker';

import App from './components/App/App';
import configureStore from './configureStore';

import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import '../node_modules/animate.css/animate.min.css';
import '../node_modules/toastr/build/toastr.min.css';

import './index.css';
import { Route } from 'react-router-dom';
// import thunk from 'redux-thunk';

// Create a history of your choosing (we're using a browser history in this case)
const history = createHistory();

let store=configureStore(history);// Now you can dispatch navigation actions from anywhere! - store.dispatch(push('/foo'))

const root=document.getElementById('root');

ReactDOM.render(
  <Provider store={store}>
    { /* ConnectedRouter will use the store from Provider automatically */ }
    <ConnectedRouter history={history}>
    <Route
      render={({ location }) => (
        <App/>
      )}
      />
    </ConnectedRouter>
  </Provider>,
  root
);

registerServiceWorker();
