import { useEffect } from "react";
import ScrollToTop from "react-scroll-to-top";
import Footer from "./Components/Footer/view";
import Header from "./Components/Header/view";
import Home from "./page/Home/view";
import "aos/dist/aos.css";
import AOS from "aos";

function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <>
      <Header />
      <Home />
      <Footer />
      <ScrollToTop smooth className="scroll-to-top" color="white" />
    </>
  );
}

export default App;
