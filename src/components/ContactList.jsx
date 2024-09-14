import { useSelector } from "react-redux";
import Contact from "./Contact";
import styles from "./ContactList.module.css";
import { selectFilteredContacts } from "../redux/contacts/selectors.js";

const ContactList = () => {
  const filteredContacts = useSelector(selectFilteredContacts);

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
