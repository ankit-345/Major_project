import Top from "./components/topbar/Top";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Home from './pages/home/Home'
import Settings from "./pages/settings/Settings";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from 'react-router-dom';
import { useContext } from "react";
import { Context } from "./context/Context";

const Layout = () =>{
    return(
      <>
      <Top />
      <Outlet />
      </>
    )
  }

function App() {
  const {user} = useContext(Context);
  
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path: '/',
          element: <Home />
        },
        {
          path: 'write',
          element: user ? <Write />: <Register />
        },
        { 
          path: 'login',
          element: user ? <Home />: <Login /> ,
        },
        {
          path: 'register',
          element: user ? <Home />: <Register /> 
        },
        {
          path: 'settings',
          element: user ? <Settings />: <Register />
        },
        {
          path: '/post/:id',
          element: <Single />
        }
      ] 
    }
  ])
  return (
    <>
     <RouterProvider router={router} />
    </>
  );
}

export default App;
