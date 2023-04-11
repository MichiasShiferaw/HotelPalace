import Footer from "../Footer/Footer";
import Navbar from "../Navbar/NavbarCust";
const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <div className="container">{children}</div>

    </div>
  );
};

export default Layout;
