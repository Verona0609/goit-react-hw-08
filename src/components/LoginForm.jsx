import { ErrorMessage, Field, Formik } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { logIn } from "../redux/auth/operations";
import { Form } from "react-router-dom";
import styles from "./ContactForm.module.css";

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .min(3, "Еnter real Email!")
    .max(50, "Too Long!")
    .required("Name is required"),
  password: Yup.string()
    .min(8, "Еnter real email!")
    .max(50, "Too long")
    .required("Password is required"),
  /*  .matches(numberVal) */
});

const LoginForm = () => {
  const dispatch = useDispatch();
  const handleSubmit = (values) => {
    dispatch(logIn(values));
  };
  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      <Form>
        <Field type="email" name="email" placeholder="Email" />
        <ErrorMessage className={styles.error} name="name" component="span" />

        <Field type="password" name="password" placeholder="Password" />
        <ErrorMessage className={styles.error} name="name" component="span" />
        <button type="submit">LOGIN</button>
      </Form>
    </Formik>
  );
};

export default LoginForm;
