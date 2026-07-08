import { Outlet } from "react-router-dom";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Banner />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}