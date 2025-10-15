
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home';
import UperNav from './components/uperNav';
import {createBrowserRouter,RouterProvider} from 'react-router-dom';

const router = createBrowserRouter([
           {
            path:'/',
            element:<Home/>
           }
])
function App() {
 

  return (
    <>
    <UperNav></UperNav>

      <RouterProvider router={router}/>
      
       
    </>
  )
}

export default App
