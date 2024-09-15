import Navigation from "./Navigation";

import css from "./AppBar.module.css";
const AppBar = () => {
  return (
    <header className={css.container}>
      <Navigation />
    </header>
  );
};

export default AppBar;
