import LoginForm from "../components/LoginForm";
import css from "./HomePage.module.css"

const LoginPage = () => {
  return (
    <div>
      <h1 className={css.title}>Login</h1>
      <LoginForm/>
    </div>
  );
};

export default LoginPage;
