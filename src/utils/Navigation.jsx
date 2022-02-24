import UserMenu from "../components/UserMenu";
import { NavLink } from "react-router-dom";
import s from './Navigation.module.css';
import { useSelector } from "react-redux";
import { getIsLoggedin } from "../redux/auth/authSelector";

const Navigation = () => {
  const isLoggedin = useSelector(getIsLoggedin)
    return (<> <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
      
      {isLoggedin?<div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%'}}><NavLink to="/contacts" className={s.link} activeClassName={s.activeLink}>
        Contacts
      </NavLink>  <UserMenu/></div> : <><p></p><div>
      <NavLink to="/login" className={s.link} activeClassName={s.activeLink}>
        Login
      </NavLink>
      <NavLink exact to="/register" className={s.link} activeClassName={s.activeLink}>
        Registration
      </NavLink></div></>}
        
      
      
    </div> <hr /></>);
}
 
export default Navigation;