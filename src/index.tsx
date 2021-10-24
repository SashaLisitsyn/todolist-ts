import { render } from 'react-dom';
import { Provider } from 'react-redux';

import { toDoStore } from './store/toDoStore';

import { App } from './components/App';

render(
  <Provider store={toDoStore}>
    <App />
  </Provider>,
  document.getElementById('root')
);
