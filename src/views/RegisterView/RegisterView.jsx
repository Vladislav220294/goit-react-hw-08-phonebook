import { useState } from "react";
import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/authOperations";

const RegisterView = () => {
    const dispatch = useDispatch();
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const handleInputChange = (event) => {
       const { name, value } = event.currentTarget;

    switch (name) {
      case 'name':
        setName(value);
        break;
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
        dispatch(register({ name, email, password }));
        setName('')
        setEmail('')
        setPassword('')
    }
    return (<><h1>Registration</h1>
        <form action="" onSubmit={handleSubmit}><label>name
             <input
              value={name}
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              onChange={handleInputChange}
            />
          </label>
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
            Registration
          </button>
        </form></>
        
    );
}
 
export default RegisterView;