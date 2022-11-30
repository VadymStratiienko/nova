import ScrollToTop from "react-scroll-to-top";
import Footer from "./Components/Footer/view";
import Header from "./Components/Header/view";
import Home from "./page/Home/view";

function App() {
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
