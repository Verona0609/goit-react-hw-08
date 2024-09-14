import AppBar from "./AppBar";

const Layout = ({ children }) => {
  return (
    <>
      <header>
        <AppBar />
      </header>
      {children}
    </>
  );
};

export default Layout;
