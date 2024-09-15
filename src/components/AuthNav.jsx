import { NavLink } from "react-router-dom";
import css from "./AuthNav.module.css";
import clsx from "clsx";

const AuthNav = () => {
  return (
    <div className={css.conteinerheader}>
      <NavLink
        className={({ isActive }) => {
          return clsx(css.link, isActive && css.active);
        }}
        to="/register"
      >
        Register
      </NavLink>
      <NavLink
        className={({ isActive }) => {
          return clsx(css.link, isActive && css.active);
        }}
        to="/login"
      >
        Login
      </NavLink>
    </div>
  );
};

export default AuthNav;
