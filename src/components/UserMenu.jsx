import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../redux/auth/selectors";
import { logOut } from "../redux/auth/operations";
import css from "./UserMenu.module.css";
import { resetContacts } from "../redux/contacts/slice";

const UserMenu = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logOut()).then(() => {
      dispatch(resetContacts());
    });
  };
  return (
    <div className={css.conteiner}>
      <p className={css.welcome}>Welcome, {user.name}!</p>
      <button className={css.buttonout} type="button" onClick={handleLogout}>
        Log out
      </button>
    </div>
  );
};

export default UserMenu;
