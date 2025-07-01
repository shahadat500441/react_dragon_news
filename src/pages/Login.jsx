import { AuthContext } from "../providers/AuthProvider";
import Navbar from "./Shered/Navbar";
import {Link} from "react-router-dom"
import {useContext} from "react"


const Login = () => {
  const {signInUser} = useContext(AuthContext)
    const handleLogin =(e)=>{
        e.preventDefault();
        console.log(e.currentTarget)
        const form = new FormData(e.currentTarget)
        console.log(form.get("email"))
        const email = form.get("email")
      const password = form.get("password")
      signInUser(email,password)
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
        <h2 className="text-3xl font-bold text-center">Please Login your account</h2>
        <form onSubmit={handleLogin} className="md:w-3/4 lg:w-1/2 mx-auto border p-4 rounded-lg mt-5">
          <fieldset className="fieldset">
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
        <p className="text-center mt-4">Don't have an account ? Please <Link to="/register" className="font-bold text-primary ">Register</Link></p>
       
      </div>
    </div>
  );
};

export default Login;
