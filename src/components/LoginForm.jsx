import { Formik, Field, ErrorMessage, Form } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { logIn } from "../redux/auth/operations";
import styles from "./ContactForm.module.css";

const validationSchema = Yup.object().shape({
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

const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values) => {
    dispatch(logIn(values));
  };

  return (
    <div className={styles.container}>
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {() => (
          <Form className={styles.form}>
            <div>
              <Field
                type="email"
                name="email"
                placeholder="Email"
                className={styles.field}
              />
              <ErrorMessage
                className={styles.error}
                name="email"
                component="span"
              />
            </div>

            <div>
              <Field
                type="password"
                name="password"
                placeholder="Password"
                className={styles.field}
              />
              <ErrorMessage
                className={styles.error}
                name="password"
                component="span"
              />
            </div>

            <button type="submit" className={styles.buttonForm}>
              LOGIN
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default LoginForm;
