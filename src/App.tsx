import { useEffect } from 'react';
import ScrollToTop from 'react-scroll-to-top';
import Footer from './Components/Footer/view';
import Header from './Components/Header/view';
import Home from './page/Home/view';
import About from './page/About/view';
import Services from './page/Services/view';
import Portfolio from './page/Portfolio/view';
import PortfolioDetals from './page/PortfolioDetals/view';
import Team from './page/Team/view';
import Blog from './page/Blog/view';
import Contact from './page/Contact/view';
import BlogDetals from './page/BlogDetals/view';
import { BaseModalBackground, ModalProvider } from 'styled-react-modal';
import { Route, Routes } from 'react-router-dom';
import 'aos/dist/aos.css';
import AOS from 'aos';
import styled from 'styled-components';

const SpecialModalBackground = styled(BaseModalBackground)`
  background-color: #0c0b0b;
  z-index: 999999999;
`
function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <ModalProvider backgroundComponent={SpecialModalBackground}>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='services' element={<Services />} />
        <Route path='portfolio' element={<Portfolio />} />
        <Route path='/portfolio-details' element={<PortfolioDetals />} />
        <Route path='team' element={<Team />} />
        <Route path='blog' element={<Blog />} />
        <Route path='/blog-details' element={<BlogDetals />} />
        <Route path='contact' element={<Contact />} />
      </Routes>
      <Footer />
      <ScrollToTop smooth className='scroll-to-top' color='white' />
    </ModalProvider>
  );
}

export default App;
