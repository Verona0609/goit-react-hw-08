import { useSelector } from "react-redux";
import clsx from "clsx";
import { NavLink } from "react-router-dom";
import { selectIsLoggedIn } from "../redux/auth/selectors";
import css from "./Navigation.module.css";

const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <>
      <NavLink
        to="/"
        className={({ isActive }) => {
          return clsx(css.link, isActive && css.active);
        }}
      >
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink
          to="/contacts"
          className={({ isActive }) => {
            return clsx(css.link, isActive && css.active);
          }}
        >
          Contacts
        </NavLink>
      )}
    </>
  );
};

export default Navigation;
