
import { useRoutes } from 'react-router-dom'
// import Main from './pages/Mainpage/index'
import routes from './routes';

function App() {
  const element = useRoutes(routes)

  return (
    <div style={{ height: '100%' ,width:'400px',margin:'auto'}}>
      {element}

    </div>
  )
}

export default App
