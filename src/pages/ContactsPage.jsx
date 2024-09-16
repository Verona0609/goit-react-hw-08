import ContactList from "../components/ContactList";
import ContactForm from "../components/ContactForm";
import SearchBox from "../components/SearchBox";
import css from "./HomePage.module.css";
import { useDispatch, useSelector } from "react-redux";
import {
  selectContacts,
  selectError,
  selectLoading,
} from "../redux/contacts/selectors";
import { fetchContacts } from "../redux/contacts/operations";
import { useEffect } from "react";

const ContactsPage = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectLoading);
  const error = useSelector(selectError);
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <div>
      <h1 className={css.title}>Your Contacts</h1>
      <ContactForm />
      <SearchBox />
      {/* <ContactList /> */}
      {isLoading && <p>Loading contdcts...</p>}
      {error && <p>Error: {error}</p>}
      {!isLoading && !error && <ContactList contacts={contacts} />}
    </div>
  );
};

export default ContactsPage;
