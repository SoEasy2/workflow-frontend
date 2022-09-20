import ReactDOM from 'react-dom/client'
import { App } from './App'
import { BrowserRouter } from 'react-router-dom';
import './i18n'
import './sass/_reset.scss';
import * as serviceWorker from './serviceWorker';
import './sass/_core.scss';


const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
)

serviceWorker.unregister()
