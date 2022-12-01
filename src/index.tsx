import ReactDOM from 'react-dom/client';
import { App } from './App';
import { BrowserRouter } from 'react-router-dom';
import { ApolloProvider } from '@apollo/client';
import { useApollo } from './graphql/client';

import { isMobile } from 'react-device-detect';

import './i18n';
import './sass/_reset.scss';
import * as serviceWorker from './serviceWorker';
import './sass/_core.scss';
import { Provider } from 'react-redux';
import { setupStore } from './redux/store';
import { AppMobile } from './App.mobile';

console.log('is Mobile', isMobile);

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
const client = useApollo();
const store = setupStore();

console.log('isMobile', isMobile);

root.render(
  <BrowserRouter>
    <ApolloProvider client={client}>
      <Provider store={store}>{isMobile ? <AppMobile /> : <App />}</Provider>
    </ApolloProvider>
  </BrowserRouter>,
);

serviceWorker.unregister();
