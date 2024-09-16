import { useSelector } from "react-redux";
import Contact from "./Contact";
import styles from "./ContactList.module.css";
import {
  selectError,
  selectFilteredContacts,
  selectLoading,
} from "../redux/contacts/selectors.js";
import Loader from "./Loader.jsx";

const ContactList = () => {
  const filteredContacts = useSelector(selectFilteredContacts);
  const isLoading = useSelector(selectLoading);
  const error = useSelector(selectError);

  if (isLoading) {
    return <Loader />; // Відображаємо індикатор завантаження
  }

  if (error) {
    return <p>Error: {error}</p>; // Відображаємо помилку
  }

  if (filteredContacts.length === 0) {
    return <p>No contacts found</p>; // Повідомлення, якщо контактів немає
  }

  return (
    <ul className={styles.ul}>
      {filteredContacts.map((contact) => (
        <Contact
          key={contact.id}
          id={contact.id}
          name={contact.name}
          number={contact.number}
        />
      ))}
    </ul>
  );
};

export default ContactList;
