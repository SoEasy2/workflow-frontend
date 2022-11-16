import ReactDOM from 'react-dom/client'
import { App } from './App'
import { BrowserRouter } from 'react-router-dom'
import { ApolloProvider } from '@apollo/client';
import client from './graphql/client';

import './i18n'
import './sass/_reset.scss'
import * as serviceWorker from './serviceWorker'
import './sass/_core.scss'
import { Provider } from 'react-redux';
import { setupStore } from './redux/store';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
const store = setupStore()
root.render(
  <BrowserRouter>
      <ApolloProvider client={client}>
          <Provider store={store} >
              <App />
          </Provider>
      </ApolloProvider>
  </BrowserRouter>,
)

serviceWorker.unregister()
