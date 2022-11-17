import { Outlet, Navigate } from "react-router-dom";

const Route = ({ element: Component, ...rest }) => {
  // assume that user is not login yet
  const isLogin = true;

  return isLogin ? <Outlet /> : <Navigate to="/login" />;
};

export default Route;
