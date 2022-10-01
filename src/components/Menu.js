import { NavLink } from "react-router-dom";
import "../App.css";

const Menu = () => {
  return (
    <nav className="menu">
      <NavLink
        className={(match) => (match.isActive ? "activeLink" : "menu__item")}
        to="/"
        end
      >
        Главная
      </NavLink>
      <NavLink
        className={(match) => (match.isActive ? "activeLink" : "menu__item")}
        to="/drift"
      >
        Дрифт-такси
      </NavLink>
      <NavLink
        className={(match) => (match.isActive ? "activeLink" : "menu__item")}
        to="/timeattack"
      >
        Time Attack
      </NavLink>
      <NavLink
        className={(match) => (match.isActive ? "activeLink" : "menu__item")}
        to="/forza"
      >
        Forza Karting
      </NavLink>
    </nav>
  );
};

export default Menu;
