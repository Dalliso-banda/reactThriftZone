import '../public/test.jpg'
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home';
import LoginPage  from './pages/LoginPage';
import Profile from './pages/Profile';
import SignUpPage from './pages/signUp';
import { CartProvider } from "./components/CartContext";
import Gallery from './pages/galleryView'
import PostPage from './pages/PostPage';
import Cart from './pages/cart'
import {createBrowserRouter,RouterProvider} from 'react-router-dom';


const router = createBrowserRouter([
             {
            path:'/',
            element:<Home/>
           },
           {
            path:'/home/:section',
            element:<Home/>
           },
           {
            path:'/login',
            element: <LoginPage/>
           },
           {
            path:'account',
            element:<Profile/>
           },
           {
            path:'/signup',
            element:<SignUpPage/>
           },
            {
            path:'/post',
            element:<PostPage/>
           }
          ,
             {
            path:'/gallery',
            element:<Gallery/>
           },     {
            path:'/cart',
            element:<Cart/>
           },

])
function App() {
 

  return (
    <>

        <CartProvider>
            <RouterProvider router={router}/>
        </CartProvider>
      

       
    </>
  )
}

export default App
