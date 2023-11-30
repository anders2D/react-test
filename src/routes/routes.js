import LoginPage from '../pages/login';

import menu from './menu';

const allRoutes = [
  {
    path: "/",
    element: <LoginPage/>,
    title: "Login"
  },
  menu
  
]

export default allRoutes