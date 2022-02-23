import { useSelector, useDispatch } from "react-redux";
import { logout } from "../redux/auth/authOperations";
import { getUserName } from "../redux/auth/authSelector";

const UserMenu = () => {
    const dispatch = useDispatch();
    const name = useSelector(getUserName);
    const onClick = ()=> dispatch(logout())
    return (<div>
        <span>{name}</span>
        <button type="button" onClick={onClick}>Logout</button>
    </div> );
}
 
export default UserMenu;