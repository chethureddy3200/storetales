import Homepage from './pages/Homepage';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Root from "./pages/Root";
import Products from './pages/Products';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ProdcutDescp from './pages/ProductDescp';
import Blog from "./pages/Blog"
import SingleBlogPost from "./pages/SinglePost"


const router = createBrowserRouter([{
  path: "/", element: <Root />, children: [{
    path: "/",
    element: <Homepage />
  }, {
    path: "/login",
    element: <Login />
  },{
    path: "/signup", 
    element: <Signup />
  },{
    path: "/products",
    element: <Products />
  },{
    path: "/test",
    element: <ProdcutDescp />
  },{
    path: "/blog",
    element: <Blog />
  },{
    path: "/blog/:slug",
    element: <SingleBlogPost />
  }

]
}]);

function App() {
  return (
    // <div className="App">
    //   <Navbar />
    //   {/* <Homepage /> */}
    //   {/* <Login /> */}
    //   <Signup />
    // </div>
    <RouterProvider router={router} />
  );
}

export default App;
