import ContactList from "../components/ContactList";
import ContactForm from "../components/ContactForm";
import SearchBox from "../components/SearchBox";
import css from "./HomePage.module.css";

const ContactsPage = () => {
  return (
    <div>
      <h1 className={css.title}>Your Contacts</h1>
      <ContactForm />
      <SearchBox />
      <ContactList />
    </div>
  );
};

export default ContactsPage;
