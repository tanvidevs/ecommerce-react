import './App.css';
import { productData } from './api/api.js';
import Footer from './components/Footer';
import Header from './components/Header';
import Products from './components/Products';
import Cart from './pages/Cart';
import Home from './pages/Home';
import { createBrowserRouter, RouterProvider, Outlet, ScrollRestoration } from "react-router-dom";
import Login from './pages/Login';


const Layout = () => {
  return (
    <div>
      <Header />
      <ScrollRestoration/>
      <Outlet />
      <Footer />
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />,
        loader: productData,
      },
      {
        path:"/products/:id",
        element:<Products/>,
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "/login",
        element: <Login/>
      },
    ],
  },
]);

function App() {
  return (
    <RouterProvider router={router}>
      <div className="App">
        <Layout />
      </div>
    </RouterProvider>
  );
}

export default App;
