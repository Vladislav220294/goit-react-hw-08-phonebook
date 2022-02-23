import { NavLink } from "react-router-dom";
import s from './Navigation.module.css';

const Navigation = () => {
    return ( <>
      
      <NavLink to="/login" className={s.link} activeClassName={s.activeLink}>
        Login
      </NavLink>
      <NavLink exact to="/register" className={s.link} activeClassName={s.activeLink}>
        Registration
      </NavLink>
        <NavLink to="/contacts" className={s.link} activeClassName={s.activeLink}>
        Contacts
      </NavLink>
      <hr />
    </> );
}
 
export default Navigation;