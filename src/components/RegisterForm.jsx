import { useDispatch } from "react-redux";
import { register } from "../redux/auth/operations";
import { Formik, Field, Form, ErrorMessage } from "formik";
import styles from "./ContactForm.module.css";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Enter a real name!")
    .max(50, "Too Long!")
    .required("Name is required"),
  email: Yup.string()
    .email("Invalid email format")
    .min(3, "Enter a real email!")
    .max(50, "Too Long!")
    .required("Email is required"),
  password: Yup.string()
    .min(8, "Enter a real password!")
    .max(50, "Too long")
    .required("Password is required"),
});

const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values) => {
    dispatch(register(values));
  };

  return (
    <div className={styles.container}>
      <Formik
        initialValues={{ name: "", email: "", password: "" }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {() => (
          <Form className={styles.form}>
            <div>
              <Field
                className={styles.field}
                type="text"
                name="name"
                placeholder="Your name"
              />
              <ErrorMessage
                className={styles.error}
                name="name"
                component="span"
              />
            </div>

            <div>
              <Field
                className={styles.field}
                type="email"
                name="email"
                placeholder="Your email"
              />
              <ErrorMessage
                className={styles.error}
                name="email"
                component="span"
              />
            </div>

            <div>
              <Field
                className={styles.field}
                type="password"
                name="password"
                placeholder="Your password"
              />
              <ErrorMessage
                className={styles.error}
                name="password"
                component="span"
              />
            </div>

            <button className={styles.buttonForm} type="submit">
              REGISTER
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default RegisterForm;

/* import { useDispatch } from "react-redux";
import { register } from "../redux/auth/operations";
import { ErrorMessage, Field, Formik } from "formik";
import styles from "./ContactForm.module.css";
import * as Yup from "yup";
import { Form } from "react-router-dom";

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
        <Form>
      <Field type="text" name="name" placeholder="Your name" />
      <ErrorMessage className={styles.error} name="name" component="span" />
      <Field type="email" name="email" placeholder="Your email" />
      <ErrorMessage className={styles.error} name="email" component="span" />
      <Field type="password" name="password" placeholder="Your password" />
      <ErrorMessage className={styles.error} name="password" component="span" />
      <button type="submit">Register</button>
      </Form>
    </Formik>
  );
};

export default RegisterForm; */
