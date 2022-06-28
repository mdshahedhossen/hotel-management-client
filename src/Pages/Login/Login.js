import React, { useEffect } from "react";
import auth from "../../firebase.init";
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import Loading from '../Shared/Loading'
import { Link, useLocation, useNavigate } from "react-router-dom";
import useToken from "../../hooks/useToken";

const Login = () => {
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
  const [
    signInWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useSignInWithEmailAndPassword(auth)
  const [token]=useToken(user || gUser)

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const navigate=useNavigate();
  
  const location=useLocation();
  let from = location.state?.from?.pathname || "/";

  useEffect(()=>{
    if (token) {
      navigate(from, { replace: true });
    }
  
  },[token,from,navigate])
  let signInError;
  if(user || gUser){
    navigate('/')
  }
  if(loading||gLoading){
    return <Loading></Loading>
  }

  if (error ||gError) {
    signInError=<p className="text-red-500">{error?.message}</p>
  }

  const onSubmit = (data) => {
    signInWithEmailAndPassword(data.email, data.password)
    
  };
    return (
        <div className="flex h-screen justify-center items-center bg-[#4287f5]">
        <div className="card w-96 bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="text-center font-press-start text-[40px] font-bold">Login</h2>
  
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="input input-bordered w-full max-w-xs"
                  {...register("email", {
                    required: {
                      value: true,
                      message: "Email is required",
                    },
                    pattern: {
                      value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                      message:'provide a valid email'
                    },
                  })}
                />
                <label className="label">
                  {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span> }
                  {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span> }
                </label>
              </div> 
  
              {/*--------------------password field --------------------*/}
  
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="Enter your Password"
                  className="input input-bordered w-full max-w-xs"
                  {...register("password", {
                    required: {
                      value: true,
                      message: "Password is required",
                    },
                    minLength: {
                      value: 6,
                      message:'must be 6 character or longer',
  
                    },
                  })}
                />
                <label className="label">
                  {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span> }
                  {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.password.message}</span> }
                </label>
              </div>
              {signInError}
              <input className="btn w-full max-w-xs text-white bg-[#3484F0] border-none" type="submit" value='Login'/>
            </form>
  
           <p className="text-center text-sm text-gray-500">Not a Register?<Link className="text-blue-500 " to='/signup'> Create an account</Link></p>
            <div className="divider">OR</div>
            <button
              onClick={() => signInWithGoogle()}
              className="btn btn-outline bg-white border-gray-200 text-gray-500"
            >
              CONTINUE WITH GOOGLE
            </button>
          </div>
        </div>
      </div>
    );
};

export default Login;