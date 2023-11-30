import DashboardPage from '../pages/dashboard';
import Inicio from '../pages/dashboard/inicio';

import Personas from '../pages/dashboard/personas';

const menu = {
    path: "/dashboard",
    element: <DashboardPage/>,
    children: [
      {
        path: "inicio",
        element: <Inicio/>,
        title: "Inicio"
      },
      {
        path: "personas",
        element: <div> div de ejemplo xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</div>,
        title: "Personas"
      },
      {
        path: "productos",
        element: <Inicio/>,
        title: "Productos",
        icon : <div>icon</div>
      },
      {
        path: "productos",
        element: <Inicio/>,
        title: "Productos"
      },
      {
        path: "productos",
        element: <Inicio/>,
        title: "Productos"
      },
    ],
  }

export default menu