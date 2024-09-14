import { useDispatch } from "react-redux";
import { register } from "../redux/auth/operations";
import { ErrorMessage, Field, Formik } from "formik";
import styles from "./ContactForm.module.css";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Еnter real name!")
    .max(50, "Too Long!")
    .required("Name is required"),
  email: Yup.string()
    .min(3, "Еnter real email!")
    .max(50, "Too Long!")
    .required("Email is required"),
  password: Yup.string()
    .min(8, "Еnter real password!")
    .max(50, "Too long")
    .required("Password is required"),
  /*  .matches(numberVal) */
});

const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values) => {
    dispatch(register(values));
  };
  return (
    <Formik
      initialValues={{ name: "", email: "", password: "" }}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      <Field type="text" name="name" placeholder="Your name:)" />
      <ErrorMessage className={styles.error} name="name" component="span" />
      <Field type="email" name="email" placeholder="Your email:)" />
      <ErrorMessage className={styles.error} name="name" component="span" />
      <Field type="password" name="password" placeholder="Your password:)" />
      <ErrorMessage className={styles.error} name="name" component="span" />
      <button type="submit">Register</button>
    </Formik>
  );
};

export default RegisterForm;
