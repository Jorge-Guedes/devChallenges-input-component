import React from "react";

import { Link, NavLink, useNavigate } from "react-router-dom";
import useMedia from "../Hooks/useMedia";

import styles from "./Nav.module.css";

const Nav = () => {
  const mobile = useMedia("(max-width: 40rem)");
  const [mobileMenu, setMobileMenu] = React.useState(true);
  const [statusAria, setstatusAria] = React.useState(true);
  const [aria, setAria] = React.useState("");
  const navigate = useNavigate();

  React.useEffect(() => {
    handleMenu();
  }, [navigate]);

  function handleMenu() {
    setMobileMenu(!mobileMenu);
    setstatusAria(!statusAria);
    statusAria ? setAria("Abrir Menu") : setAria("Fechar Menu");
  }

  return (
    <nav
      className={`${mobile ? styles.navMobile : styles.nav} ${
        mobileMenu !== false ? styles.active : ""
      }`}
    >
      <Link className={styles.logo} to="/">
        <span>Dev</span>Challenges.io
      </Link>
      {mobile && (
        <button
          aria-label={aria}
          onClick={handleMenu}
          className={`${styles.buttonMobile}`}
        ></button>
      )}
      <ul id="menu" className={`${mobile ? styles.menuMobile : styles.menu}`}>
        <li>
          <NavLink to="colors">Colors</NavLink>
        </li>
        <li>
          <NavLink to="typography">Typography</NavLink>
        </li>
        <li>
          <NavLink to="spaces">Spaces</NavLink>
        </li>
        <li>
          <NavLink to="buttons">Buttons</NavLink>
        </li>
        <li>
          <NavLink to="inputs">Inputs</NavLink>
        </li>
        <li>
          <NavLink to="grid">Grid</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
