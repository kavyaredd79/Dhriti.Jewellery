import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import {
  About,
  Cart,
  Products,
  LandingPage,
  Home,
  SingleProduct,
  Error,
  CheckOut,
  PrivacyPolicy,
  Faq,
} from "./pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
    errorElement: <Error />,
    children:[
      {
        index: true,
        element:<LandingPage />
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "checkout",
        element: <CheckOut />,
      },
      {
        path: "products",
        element: <Products />,
      },
      {
        path:"privacypolicy",
        element: <PrivacyPolicy />
      },
      {
        path:"faq",
        element: <Faq />
      },
      {
        path:"products/:id",
        element:<SingleProduct />
      }
    ]
  },

]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
