import ContactList from "../components/ContactList";
import ContactForm from "../components/ContactForm";
import SearchBox from "../components/SearchBox";

const ContactsPage = () => {
  return (
    <div>
      <h1>Your Contact</h1>
      <ContactForm />
      <SearchBox />
      <ContactList />
    </div>
  );
};

export default ContactsPage;
