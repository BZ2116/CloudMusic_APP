import { Navigate } from 'react-router-dom'
import Log from '../pages/Log/index.jsx'
import Main from '../pages/Mainpage/index'
import User from '../pages/User/index'
import UserDetail from '../pages/UserDetail/index.jsx';
import Blog from '../pages/User/pages/blog';
import Mainpage from '../pages/User/pages/mainpage';
import Trends from '../pages/User/pages/trends';
import Playlist from '../pages/Playlist'
import Play from '../pages/Play'
export default [
  {
    path: '/log',
    element: <Log />
  },
  {
    path: '/main',
    element: <Main />
  },
  {
    path: '/user',
    element: <User />,
    children: [
      {
        path: 'mainpage',
        element: <Mainpage />
      },
      {
        path: 'trends',
        element: <Trends />
      },
      {
        path: 'blog',
        element: <Blog />
      },
      {
        path: '',
        element: <Navigate to='mainpage' />
      }
    ]
  },
  {
    path: 'playlist',
    element: <Playlist />,
  }
  ,
  {
    path: '/userdetail',
    element: <UserDetail />
  },
  {
path:'/play',
element:<Play/>
  },
  {
    path: '/',
    element: <Navigate to='/main' />
  }
]