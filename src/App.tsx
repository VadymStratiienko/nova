import { useEffect } from "react";
import ScrollToTop from "react-scroll-to-top";
import Footer from "./Components/Footer/view";
import Header from "./Components/Header/view";
import Home from "./page/Home/view";
import "aos/dist/aos.css";
import AOS from "aos";
import  { ModalProvider } from "styled-react-modal";
import { Navigate, Route, Routes } from 'react-router-dom';
import About from "./page/About/view";

function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <ModalProvider>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />}/>
      </Routes>
      <Footer />
      <ScrollToTop smooth className="scroll-to-top" color="white" />
      </ModalProvider>
  )
}

export default App;
