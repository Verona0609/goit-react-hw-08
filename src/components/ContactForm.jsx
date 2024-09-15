import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";

import styles from "./ContactForm.module.css";

import { useDispatch } from "react-redux";
import { addContact } from "../redux/contacts/operations";
/* import { FaUser } from "react-icons/fa"; */

/* const numberVal = /([0-9]{3})[0-9]{3}-[0-9]{4}/; */
const validationSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Еnter real name!")
    .max(50, "Too Long!")
    .required("Name is required!"),
  number: Yup.string()
    .min(3, "Еnter real number!")
    .max(50, "Too long")
    .required("Number is required!"),
});

const ContactForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    const newContact = {
      name: values.name,
      number: values.number,
    };
    dispatch(addContact(newContact));
    actions.resetForm();
  };

  const initialValues = { name: "", number: "" };
  return (
    <div className={styles.container}>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form className={styles.form}>
          <div>
            <label className={styles.titel} htmlFor="name" placeholder="NAME">
              <ErrorMessage
                className={styles.error}
                name="name"
                component="span"
              />
            </label>
            <Field
              className={styles.field}
              type="text"
              name="name"
              placeholder="Name"
            ></Field>
          </div>

          <div>
            <label className={styles.titel} htmlFor="number">
              <ErrorMessage
                className={styles.error}
                name="number"
                component="span"
              />
            </label>
            <Field
              className={styles.field}
              type="number"
              name="number"
              placeholder="Number"
            ></Field>
          </div>

          <button className={styles.buttonForm} type="submit">
            ADD CONTACT
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default ContactForm;
