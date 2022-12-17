import { useState } from 'react';
import { BsLink45Deg } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import App1 from '../../assets/img/portfolio/app-1.jpg';
import App2 from '../../assets/img/portfolio/app-2.jpg';
import App3 from '../../assets/img/portfolio/app-3.jpg';
import Books1 from '../../assets/img/portfolio/books-1.jpg';
import Books2 from '../../assets/img/portfolio/books-2.jpg';
import Books3 from '../../assets/img/portfolio/books-3.jpg';
import Branding1 from '../../assets/img/portfolio/branding-1.jpg';
import Branding2 from '../../assets/img/portfolio/branding-2.jpg';
import Branding3 from '../../assets/img/portfolio/branding-3.jpg';
import Product1 from '../../assets/img/portfolio/product-1.jpg';
import Product2 from '../../assets/img/portfolio/product-2.jpg';
import Product3 from '../../assets/img/portfolio/product-3.jpg';

const Container = styled.div`
  overflow: hidden;
  padding: 80px 0;
  margin: 0 auto;
  margin-left: auto;
  margin-right: auto;
  max-width: 1440px;
`;
const Tabs = styled.ul`
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
  .active-tabs {
    color: var(--color-primary);
  }

  li {
    color: var(--color-secondary);
    cursor: pointer;
    display: inline-block;
    padding: 0;
    font-size: 18px;
    font-weight: 400;
    margin: 0 10px;
    line-height: 1;
    margin-bottom: 5px;
    transition: all 0.3s ease-in-out;
    :hover {
      color: var(--color-primary);
    }

    :first-child {
      margin-left: 0;
    }
    :last-child {
      margin-right: 0;
    }
  }
`;
const Product = styled.div`
  position: relative;
  padding: 0 12px;
  margin: 24px 0 0;
  max-width: 440px;

  img {
    max-width: 100%;
    height: auto;
  }
`;
const ProductsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;
const Info = styled.div`
  opacity: 0;
  position: absolute;
  left: 30px;
  right: 30px;
  bottom: 0;
  z-index: 3;
  transition: all ease-in-out 0.3s;
  background: rgba(255, 255, 255, 0.9);
  padding: 15px;

  h4 {
    font-size: 18px;
    font-weight: 600;
    color: var(--color-default);
    padding-right: 50px;
  }

  p {
    color: #6c757d;
    font-size: 14px;
    margin-bottom: 0;
    padding-right: 50px;
  }
  :hover {
    opacity: 1;
    bottom: 20px;
  }
`;

const InfoLink = styled(Link)`
  right: 14px;
  font-size: 28px;
  position: absolute;
  right: 20px;
  font-size: 24px;
  top: calc(50% - 14px);
  color: rgba(27, 47, 69, 0.7);
  transition: 0.3s;
  line-height: 0;

  :hover {
    color: var(--color-primary);
  }
`;

interface IProduct {
  id: number;
  title: string;
  text: string;
  img: string;
  category: string;
}

const Products: IProduct[] = [
  {
    id: 1,
    title: 'App 1',
    text: 'Lorem ipsum, dolor sit amet consectetur',
    img: App1,
    category: 'App',
  },
  {
    id: 2,
    title: 'App 2',
    text: 'Lorem ipsum, dolor sit amet consectetur',
    img: App2,
    category: 'App',
  },
  {
    id: 3,
    title: 'App 3',
    text: 'Lorem ipsum, dolor sit amet consectetur',
    img: App3,
    category: 'App',
  },
  {
    id: 4,
    title: 'Books 1',
    text: 'Lorem ipsum, dolor sit amet consectetur',
    img: Books1,
    category: 'Books',
  },
  {
    id: 5,
    title: 'Books 2',
    text: 'Lorem ipsum, dolor sit amet consectetur',
    img: Books2,
    category: 'Books',
  },
  {
    id: 6,
    title: 'Books 3',
    text: 'Lorem ipsum, dolor sit amet consectetur',
    img: Books3,
    category: 'Books',
  },
  {
    id: 7,
    title: 'Branding 1',
    text: 'Lorem ipsum, dolor sit amet consectetur',
    img: Branding1,
    category: 'Branding',
  },
  {
    id: 8,
    title: 'Branding 2',
    text: 'Lorem ipsum, dolor sit amet consectetur',
    img: Branding2,
    category: 'Branding',
  },
  {
    id: 9,
    title: 'Branding 3',
    text: 'Lorem ipsum, dolor sit amet consectetur',
    img: Branding3,
    category: 'Branding',
  },
  {
    id: 10,
    title: 'Product 1',
    text: 'Lorem ipsum, dolor sit amet consectetur',
    img: Product1,
    category: 'Product',
  },
  {
    id: 11,
    title: 'Product 2',
    text: 'Lorem ipsum, dolor sit amet consectetur',
    img: Product2,
    category: 'Product',
  },
  {
    id: 11,
    title: 'Product 3',
    text: 'Lorem ipsum, dolor sit amet consectetur',
    img: Product3,
    category: 'Product',
  },
];

const LandingPortfolio = () => {
  const [filtered, setFiltered] = useState(Products);
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index: number) => {
    setToggleState(index);
  };

  function filterCategories(category: string) {
    if (category === 'All') {
      setFiltered(Products);
      toggleTab(1);
    } else if (category === 'App') {
      let App = [...Products].filter((item) => item.category === 'App');
      setFiltered(App);
      toggleTab(2);
    } else if (category === 'Books') {
      let Books = [...Products].filter((item) => item.category === 'Books');
      setFiltered(Books);
      toggleTab(3);
    } else if (category === 'Branding') {
      let Branding = [...Products].filter((item) => item.category === 'Branding');
      setFiltered(Branding);
      toggleTab(4);
    } else if (category === 'Product') {
      let Product = [...Products].filter((item) => item.category === 'Product');
      setFiltered(Product);
      toggleTab(5);
    }
  }

  return (
    <section>
      <Container data-aos='fade-up' data-aos-duration='1000'>
        <Tabs>
          <li
            className={toggleState === 1 ? ' active-tabs' : ''}
            onClick={() => filterCategories('All')}
          >
            All
          </li>
          <li
            className={toggleState === 2 ? 'active-tabs' : ''}
            onClick={() => filterCategories('App')}
          >
            App
          </li>
          <li
            className={toggleState === 3 ? 'active-tabs' : ''}
            onClick={() => filterCategories('Books')}
          >
            Books
          </li>
          <li
            className={toggleState === 4 ? 'active-tabs' : ''}
            onClick={() => filterCategories('Branding')}
          >
            Branding
          </li>
          <li
            className={toggleState === 5 ? 'active-tabs' : ''}
            onClick={() => filterCategories('Product')}
          >
            Product
          </li>
        </Tabs>
        <ProductsWrapper data-aos='fade-up' data-aos-duration='1000'>
          {filtered.map((item, id) => {
            return (
              <Product key={id} data-aos='zoom-out-down'>
                <div>
                  <img src={item.img} alt='' />
                  <Info>
                    <h4>{item.title}</h4>
                    <p>{item.text}</p>
                    <InfoLink to='/portfolio-details'>
                      <BsLink45Deg />
                    </InfoLink>
                  </Info>
                </div>
              </Product>
            );
          })}
        </ProductsWrapper>
      </Container>
    </section>
  );
};

export default LandingPortfolio;
