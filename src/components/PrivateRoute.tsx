import { SIGN_IN } from "../constants/routeNames";
import { useAppSelector } from "../hooks";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = () => {
  const { userInfo } = useAppSelector((state) => state.auth);
  return userInfo ? <Outlet /> : <Navigate to={SIGN_IN} replace />;
};

export default PrivateRoute;
