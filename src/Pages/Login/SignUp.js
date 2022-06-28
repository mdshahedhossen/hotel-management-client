import React from 'react';
import auth from "../../firebase.init";
import {
  useCreateUserWithEmailAndPassword,
  useSignInWithGoogle,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import Loading from "../Shared/Loading";
import { Link, useNavigate } from "react-router-dom";
import useToken from '../../hooks/useToken';

const SignUp = () => {
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  
    const {
      register,
     mState: { errors },
      handleSubmit,
    } = useForm();
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);
    const [token]=useToken(user || gUser)
    const navigate=useNavigate();
  
    let signInError;
    if (loading || gLoading||updating) {
      return <Loading></Loading>;
    }
    if(user || gUser){
         navigate('/home')
    }
  
    if (error || gError||updateError) {
      signInError = <p className="text-red-500">{error?.message}||{gError?.message} || {updateError?.message}</p>;
    }
  
    
  
    const onSubmit = async(data) => {
      // console.log(data);
      await createUserWithEmailAndPassword(data.email, data.password);
      await updateProfile({ displayName:data.name});
      // console.log(updateProfile)
     
    };
    return (
        <div className="flex h-screen justify-center items-center bg-">
        <div className="card w-96 bg-base-100 shadow-xl">
          <div className="card-body">
            <p className='text-right'><Link className="text-[#3484F0]" to="/login">Login</Link></p>
            <h2 className="text-center text-[40px] font-bold">Sign Up</h2>
  
            <form onSubmit={handleSubmit(onSubmit)}>
  
              {/* -----------------name fied-------------------- */}
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="input input-bordered w-full max-w-xs"
                  {...register("name", {
                    required: {
                      value: true,
                      message: "Name is required",
                    },
                   
                  })}
                />
                <label className="label">
                  {errors.name?.type === "required" && (
                    <span className="label-text-alt text-red-500">
                      {errors.name.message}
                    </span>
                  )}
                  
                </label>
              </div>
  
  
              {/* -----------email fied -------------*/}
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
                      message: "provide a valid email",
                    },
                  })}
                />
                <label className="label">
                  {errors.email?.type === "required" && (
                    <span className="label-text-alt text-red-500">
                      {errors.email.message}
                    </span>
                  )}
                  {errors.email?.type === "pattern" && (
                    <span className="label-text-alt text-red-500">
                      {errors.email.message}
                    </span>
                  )}
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
                      message: "must be 6 character or longer",
                    },
                  })}
                />
                <label className="label">
                  {errors.password?.type === "required" && (
                    <span className="label-text-alt text-red-500">
                      {errors.password.message}
                    </span>
                  )}
                  {errors.password?.type === "minLength" && (
                    <span className="label-text-alt text-red-500">
                      {errors.password.message}
                    </span>
                  )}
                </label>
              </div>
              {signInError}
              <input
                className="btn w-full max-w-xs text-white bg-[#4287f5] border-none"
                type="submit"
                value="Sign Up"
              />
            </form>
  
            <p className='text-center'>
              {" "}
              Already Account?{" "}
              <Link className="text-primary" to="/login">
                Please Login
              </Link>
            </p>
            <div className="divider">OR</div>
            <button
              onClick={() => signInWithGoogle()}
              className="btn btn-outline btn-accent"
            >
              CONTINUE WITH GOOGLE
            </button>
          </div>
        </div>
      </div>
    );
};

export default SignUp;