import Navbar from "./Navbar1";

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <div className="container">{children}</div>
    </div>
  );
};

export default Layout;
