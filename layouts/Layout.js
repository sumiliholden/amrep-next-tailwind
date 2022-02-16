import { Navigation } from "../components/sections/Navigation";
import { Footer } from "../components/sections/Footer";
const Layout = ({ children }) => {
  return (
    <>
      <Navigation />
      <main>{children}</main>
      <Footer />
    </>
  );
};
export default Layout;
