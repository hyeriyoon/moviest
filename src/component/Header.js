import Logo from "../component/logo.png";
import "../styles/index.css";
import Hamburger from "./Hamburger";
import Nav from "./Nav";
import { useState } from 'react';
import { Link } from 'react-router-dom'

const Header = () => {
  const [navOpen, setNavOpen] = useState(false);
  function onClickHamburger() {
    setNavOpen(!navOpen); 
  }
  return (
    <header>
      <Link to='/'><img src={Logo} alt="Movie Street logo" className="logo"/></Link>
      <Nav onClickHamburger={onClickHamburger} navOpen={navOpen}/>
      <button onClick={onClickHamburger}><Hamburger/></button>
    </header>
  );
};

export default Header;

