import css from "./HomePage.module.css";
const HomePage = () => {
  return (
    <div>
      <h1 className={css.title}>Welcome to the Phonebook App</h1>
      <p className={css.title}>This is a simple app to manage your contacts.</p>
    </div>
  );
};

export default HomePage;
