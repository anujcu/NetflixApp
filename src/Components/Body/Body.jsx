import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Browse from '../Browse/Browse'
import './Body.css'
import Login from '../Login/Login';
import appStore from '../../Store/AppStore';



import Error from '../Error/Error';
const Body = () => {
    const appRouter=createBrowserRouter(
        [{
            path:'/',
            element:<Login/>
           },
           {
            path:'/browse',
            element:<Browse/>
           },
           {
            path:'/error',
            element:<Error/>
           }
        ]);

     

  return (
    <RouterProvider router={appRouter}/>
  )
}
export default Body;