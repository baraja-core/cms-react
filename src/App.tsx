import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { store } from './redux/store';
import Router from './Router';

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Router />
      </Provider>
    </BrowserRouter>
  );
}

export default App;
