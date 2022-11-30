import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Head = styled.header<{ isScrolled: boolean }>`
  background: ${({ isScrolled }) => isScrolled && "rgba(27, 47, 69, 0.9)"};
  padding: 12px 0;
  position: fixed;
  z-index: 99;
  transition: all 0.5s;
  width: 100%;
`;
const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-left: 200px;
  margin-right: 166px;
  padding-right: 130px;
`;
const Logo = styled.h1`
  display: flex;
  align-items: center;
  color: #fff;
  cursor: pointer;
  padding-left: 12px;
  margin-left: 90px;
`;
const Navbar = styled.nav`
  padding: 0;
  width: 100%;
  max-width: 680px;
  transition: 0.3s;


  ul {
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: space-between;
    list-style: none;
    align-items: center;
  }
`;
const List = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px 0 15px 30px;
  font-family: var(--font-default);
  font-size: 15px;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.6);
  white-space: nowrap;
  transition: 0.3s;
  cursor: pointer;
`;

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <Head isScrolled={isScrolled}>
      <Container>
        <Logo>Nova</Logo>
        <Navbar>
          <ul>
            <List>Home</List>
            <List>About</List>
            <List>Services</List>
            <List>Portfolio</List>
            <List>Team</List>
            <List>Blog</List>
            <List>Dropdown</List>
            <List>Contact</List>
          </ul>
        </Navbar>
      </Container>
    </Head>
  );
};

export default Header;
