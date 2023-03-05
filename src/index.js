import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { store, persistor } from './redux/store';
import { ChakraProvider } from '@chakra-ui/react';
import 'modern-normalize';
import './styles.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <BrowserRouter basename="/hw8-react">
              <App />
            </BrowserRouter>
          </PersistGate>
        </Provider>
    </ChakraProvider>
  </React.StrictMode>
);
