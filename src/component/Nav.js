import { NavLink } from "react-router-dom";

const Nav = ({navOpen, onClickHamburger}) => {

  return (
    <div className="nav-bar">
      <nav className={navOpen? 'show' : 'hide'}>
        <ul>
          <li>
            <NavLink onClick={onClickHamburger} to="/">Home</NavLink>
          </li>
          <li>
            <NavLink onClick={onClickHamburger} to="/about">About</NavLink>
          </li>
          <li>
            <NavLink onClick={onClickHamburger} to="/favourite">Favourites</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
