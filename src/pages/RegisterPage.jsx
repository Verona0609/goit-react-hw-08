import RegisterForm from "../components/RegisterForm";
import styles from "./RegisterPage.module.css";
import css from "./HomePage.module.css";
const RegisterPage = () => {
  return (
    <div className={styles.container}>
      <h1 className={css.title}>Register</h1>
      <RegisterForm />
    </div>
  );
};

export default RegisterPage;
