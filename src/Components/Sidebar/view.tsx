import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Navbar = styled.nav<{ open: boolean }>`
  display: none;
  @media (max-width: 1278px) {
    display: flex;
    right: 0;
    position: fixed;
    top: 0;
    width: ${({open}) => (open ? "100%" : "0")};
    max-width: 400px;
    bottom: 0;
    transition: 0.3s;
    z-index: 999;
    overflow: hidden;
  }
  @media (max-width: 992px) {
    max-width: 100%;
  }
`;
const Ul = styled.ul<{ open: boolean }>`
  li {
    padding: 18px 24px;
  }
  @media (max-width: 1278px) {
    position: absolute;
    inset: 0;
    padding: 50px 0 10px 0;
    margin: 0;
    background: rgba(27, 47, 69, 0.9);
    overflow-y: auto;
    transition: 0.3s;
    z-index: 999;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
  }
  li {
    color: #fff;
    z-index: 9996;
  }
`;
interface ISidebar {
  open: boolean;
  setOpen: (open: boolean) => void;
}

const Sidebar = ({ open, setOpen }: ISidebar) => {
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "visible";
    }
  }, [open]);

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
    <Navbar open={open}>
      <Ul open={open}>
        {routes.map((el, index) => {
          return (
            <li key={index}>
              <NavLink
                style={({ isActive }) => ({
                  textDecoration: "none",
                  color: isActive ? "white" : "rgba(255, 255, 255, 0.6)",
                })}
                to={el.link}
                onClick={() => setOpen(!open)}
              >
                {el.title}
              </NavLink>
            </li>
          );
        })}
      </Ul>
    </Navbar>
  );
};

export default Sidebar;
