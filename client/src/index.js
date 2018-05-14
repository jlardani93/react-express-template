import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import { AppContainer } from 'react-hot-loader'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import hunkMIddleware from 'redux-thunk'
import registerServiceWorker from './registerServiceWorker';
import { HashRouter } from 'react-router-dom';

const render = (Component) => {
  ReactDOM.render(
    <HashRouter>
      <provider store={null}>
        <Component/>
      </provider>
    </HashRouter>,
    document.getElementById('root')
  )
}

render(App)

/*eslint-disable */
if (module.hot) {
  module.hot.accept('./components/App', () => {
    render(App)
  });
}
/*estlint-enable */
