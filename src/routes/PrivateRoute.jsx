import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../redux/auth/selectors"; // Замініть на правильний селектор

const PrivateRoute = ({ element: Component }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return isLoggedIn ? <Component /> : <Navigate to="/login" />;
};

export default PrivateRoute;
