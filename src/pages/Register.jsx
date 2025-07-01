import {useContext} from 'react';
import Navbar from './Shered/Navbar';
import {Link} from "react-router-dom"
import { AuthContext } from '../providers/AuthProvider';

const Register = () => {
  const {createUser} = useContext(AuthContext)
    const handelRegister=(e)=>{
        e.preventDefault();
        console.log(e.currentTarget)
      const from = new FormData(e.currentTarget)
      const name= from.get("name");
      const email=from.get("email");
      const password= from.get("password");
      console.log(name,email,password)

      //create user in firebase
      createUser(email,password)
      .then(result=>{
        console.log(result.user)
      })
      .catch(error=>{
        console.error(error.message)
      })
      

    }
    return (
         <div>
     <Navbar></Navbar>
      <div>
        <h2 className="text-3xl font-bold text-center">Please Register</h2>
        <form onSubmit={handelRegister} className="md:w-3/4 lg:w-1/2 mx-auto border p-4 rounded-lg mt-5">
          <fieldset className="fieldset">
          <label className="label">Name</label>
          <input name="name" type="text" className="input w-full" placeholder="Name" required/>
          <label className="label">Email</label>
          <input name="email" type="email" className="input w-full" placeholder="Email" required/>
          <label className="label">Password</label>
          <input name="password" type="password" className="input w-full" placeholder="Password"  required/>
          <div>
            <a className="link link-hover">Forgot password?</a>
          </div>
          <button className="btn btn-neutral mt-4">Login</button>
          </fieldset>
        </form>
        <p className="text-center mt-4">Already have an account ? Please <Link to="/login" className="font-bold text-primary ">Login</Link></p>
       
      </div>
    </div>
    );
};

export default Register;