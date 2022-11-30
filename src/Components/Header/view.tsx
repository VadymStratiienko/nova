import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { RootState } from "../../redux/store";
import { setOpen } from "../../redux/burgerMenuSlice";

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
  /* @media (max-width: 1366px) {
    display: none;
  } */
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

const StyledBurger = styled.div<{ open: boolean }>`
  width: 32px;
  height: 32px;
 // display: none;
 // @media (max-width: 1366px) {
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
  //}
  div {
    width: 32px;
    height: 4px;
    background-color: ${({ open }) => (open ? "#ccc" : "#ffffff")};
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;
    &:nth-child(1) {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
    }
    &:nth-child(2) {
      transform: ${({ open }) => (open ? "translateX(100%)" : "translateX(0)")};
      opacity: ${({ open }) => (open ? 0 : 1)};
    }
    &:nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
`;

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const { open } = useSelector((state: RootState) => state.burger);
  const dispatch = useDispatch();

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
      <Container data-aos="fade-up">
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
<div  onClick={() => dispatch(setOpen(open))}>
          <StyledBurger
           
            open={open}
            style={{ marginLeft: "20px" }}
          >
            <div />
            <div />
            <div />
          </StyledBurger>
          </div>
        </Navbar>
      </Container>
    </Head>
  );
};

export default Header;
