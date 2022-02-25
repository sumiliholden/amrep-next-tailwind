import { Navigation } from "../components/sections/Navigation";
import { Footer } from "../components/sections/Footer";
const Layout = ({ children }) => {
  return (
    <div>
      <Navigation />
      <main>{children}</main>
      <Footer />
    </div>
  );
};
export default Layout;
