import { useRoutes } from 'react-router-dom'
import Home from '../pages/Home'
import Projects from '../pages/Projects'
import Roadmap from '../pages/Roadmap'
import Contacts from '../pages/Contacts'





const AppRoutes = () => {

  const routes = useRoutes([
    { path: '/', element: <Home/> },
    { path: '/projects', element: <Projects/> },
    { path: '/roadmap', element: <Roadmap/> },
    { path: '/contacts', element: <Contacts/> },
  ])

  return routes
}

export default AppRoutes