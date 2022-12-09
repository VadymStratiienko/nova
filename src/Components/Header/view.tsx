import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { RootState } from "../../redux/store";
import { setOpen } from "../../redux/burgerMenuSlice";
import { NavLink } from "react-router-dom";

const Head = styled.header<{ isScrolled: boolean }>`
  background: ${({ isScrolled }) => isScrolled && "rgba(27, 47, 69, 0.9)"};
  padding: 24px 0;
  position: fixed;
  z-index: 99;
  transition: all 0.5s;
  width: 100%;
  margin-right: auto;
  margin-left: auto;
`;
const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 12px;
  margin: 0 290px;

  @media (max-width: 1680px) {
    margin: 0 160px;
  }
  @media (max-width: 1590px) {
    margin: 0 128px;
  }
  @media (max-width: 1380px) {
    margin: 0 90px;
  }
  @media (max-width: 1278px) {
    margin: 0;
  }
`;
const Logo = styled.h1`
  color: #fff;
  cursor: pointer;
`;
const Navbar = styled.nav`
  padding: 0;
  li:hover>a  a:hover li:hover{
    color: #fff;
  }

  ul {
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: row;
    flex-shrink: 0;
    list-style: none;
    li {
      padding: 15px 0 15px 30px;
      font-family: var(--font-default);
      font-size: 15px;
      font-weight: 500;
      color: rgba(255, 255, 255, 0.6);
      white-space: nowrap;
      transition: 0.3s;
      cursor: pointer;
    }
  }
  @media (max-width: 1278px) {
    display: none;
  }
`;

const StyledBurger = styled.div<{ open: boolean }>`
  width: 28px;
  height: 28px;
  display: none;
  @media (max-width: 1278px) {
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
  }
  div {
    width: 28px;
    height: 2px;
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

  let routes = [
    {
      title: "Home",
      link: "/",
    },
    {
      title: "About",
      link: "about",
    },
    {
      title: "Services",
      link: "services",
    },
    {
      title: "Portfolio",
      link: "portfolio",
    },
    {
      title: "Team",
      link: "team",
    },
    {
      title: "Blog",
      link: "blog",
    },
    {
      title: "Contact",
      link: "contact",
    },
  ];

  return (
    <Head isScrolled={isScrolled}>
      <Container data-aos="fade-up">
        <Logo>Nova</Logo>
        <Navbar>
          <ul>
            {routes.map((el, index) => {
              return(
                <li key={index}>
                  <NavLink
                  style={({isActive}) => ({
                    textDecoration: "none",
                    color: isActive ?  'white' :'rgba(255, 255, 255, 0.6)'
                  })}
                   to={el.link}>{el.title}</NavLink>
                </li>
              )
            })}
          </ul>
        </Navbar>
        <StyledBurger
          onClick={() => dispatch(setOpen(open))}
          open={open}
          style={{ marginLeft: "20px" }}
        >
          <div />
          <div />
          <div />
        </StyledBurger>
      </Container>
    </Head>
  );
};

export default Header;
