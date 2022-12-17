import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import PortfolioHeader from '../../assets/img/portfolio-header.jpg';

const Container = styled.div`
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  padding: 140px 0 60px 0;
  min-height: 30vh;
  position: relative;
  background-image: url('${PortfolioHeader}');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  ::before {
    content: '';
    background-color: rgba(27, 47, 69, 0.7);
    position: absolute;
    inset: 0;
  }
`;
const Block = styled.div`
  padding: 0 12px;

  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h2 {
    font-size: 56px;
    font-weight: 500;
    color: #fff;
    font-family: var(--font-secondary);
    margin: 0 0 8px;
  }
  ol {
    display: flex;
    flex-wrap: wrap;
    list-style: none;
    padding: 0 0 10px 0;
    margin: 0;
    font-size: 16px;
    font-weight: 600;
    color: var(--color-primary);
  }
  ol li + li::before {
    display: inline-block;
    padding-right: 10px;
    color: #fff;
    content: '/';
  }
`;
const PLink = styled(Link)`
  text-decoration: none;
  color: rgba(255, 255, 255, 0.8);
  transition: 0.3s;
  :hover {
    text-decoration: underline;
  }
`;

const BannerPortfolioDetals = () => {
  return (
    <section>
      {' '}
      <Container>
        <Block data-aos='fade-up' data-aos-duration='1000'>
          <h2>Portfolio Detals</h2>
          <ol>
            <li>
              <PLink to='/'>Home</PLink>
            </li>
             <li>Portfolio Detals</li>
          </ol>
        </Block>
      </Container>
    </section>
  );
};

export default BannerPortfolioDetals;
