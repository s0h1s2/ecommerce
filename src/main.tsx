import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
//import "bootstrap/dist/css/bootstrap.min.css"
import "../assets/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import HomeRoute from "./routes/HomeRoute.tsx";
import {
  CART,
  HOME,
  ORDER_DETAIL,
  PRODUCT_DETAIL,
  SHIPPING,
  SIGN_IN,
  SIGN_UP,
} from "./constants/routeNames.tsx";
import SigninRoute from "./routes/SigninRoute.tsx";
import CartRoute from "./routes/CartRoute.tsx";
import ProductDetail from "./routes/ProductDetailRoute.tsx";
import { Provider } from "react-redux";
import store from "./store.ts";
import SignupRoute from "./routes/SignupRoute.tsx";
import ShippingRoute from "./routes/ShippingRoute.tsx";
import PrivateRoute from "./components/PrivateRoute.tsx";
import OrderDetailRoute from "./routes/OrderDetailRoute.tsx";
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path={HOME} element={<App />}>
      <Route index={true} path={HOME} element={<HomeRoute />}></Route>
      <Route path={SIGN_IN} element={<SigninRoute />}></Route>
      <Route path={SIGN_UP} element={<SignupRoute />}></Route>
      <Route path={CART} element={<CartRoute />}></Route>
      <Route path={PRODUCT_DETAIL} element={<ProductDetail />}></Route>
      <Route path="" element={<PrivateRoute />}>
        <Route path={SHIPPING} element={<ShippingRoute />}></Route>
        <Route path={ORDER_DETAIL} element={<OrderDetailRoute />}></Route>
      </Route>
    </Route>
  ),
);
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
);
