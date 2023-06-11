import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import ScrollToTop from 'react-scroll-to-top';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import 'react-toastify/dist/ReactToastify.css';

import { ReactComponent as ScrollTop } from 'icons/scrollTop.svg';
import { routerConfig } from 'router';

import { persistor, store } from './store';
import reportWebVitals from './reportWebVitals';
import Loader from 'components/Loader';

const router = createBrowserRouter(createRoutesFromElements(routerConfig));

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <PersistGate persistor={persistor} loading={<Loader isVisible />}>
    <RouterProvider router={router} />
    <ScrollToTop
      smooth
      style={{ backgroundColor: 'transparent', borderRadius: '9999px' }}
      component={<ScrollTop className="h-12 w-12" />}
    />
    </PersistGate>
    </Provider>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
