import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../redux/auth/authOperations";

const LoginView = () => {
    const dispatch = useDispatch();
    
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const handleInputChange = (event) => {
       const { name, value } = event.currentTarget;

    switch (name) {
    
      case 'email':
        setEmail(value);
            break;
        case 'password':
        setPassword(value);
        break;
      default:
        return;
    } 
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(login({ email, password }));
        
        setEmail('')
        setPassword('')
    }
    return (<><h1>Login</h1>
        <form action="" onSubmit={handleSubmit}>
            
          <label >
            email
            <input
              type="email"
              name="email"
              value={email}
              onChange={handleInputChange}
            />
            </label>
            <label >
            password
            <input
              type="password"
              name="password"
               value={password}
              onChange={handleInputChange}
            />
          </label>
          <button  type="submit" >
            Login
          </button>
        </form></>
        
    );
}
 
export default LoginView;