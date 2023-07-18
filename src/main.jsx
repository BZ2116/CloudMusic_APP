import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Footer from './Footer.jsx'
import {BrowserRouter} from 'react-router-dom'


ReactDOM.createRoot(document.getElementById('root')).render(
<BrowserRouter>
    <App />
    <Footer/>
</BrowserRouter>
)
