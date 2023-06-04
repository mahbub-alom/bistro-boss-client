import React, { useContext, useState } from "react";
import authentication from "../../assets/others/authentication.gif";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Helmet } from "react-helmet-async";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { AuthContext } from "../../Providers/AuthProviders";
import Swal from "sweetalert2";
import SocialLogin from "../Shared/SocialLogin";

const SignUp = () => {
  const { createUser, updateUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    createUser(data.email, data.password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        updateUser(data.name, data.photoURL)
          .then(() => {
            const savedUser = {name:data.name,email:data.email}
            fetch("http://localhost:5000/users", {
              method: "POST",
              headers: {
                "content-type": "application/json",
              },
              body: JSON.stringify(savedUser),
            })
              .then((res) => res.json())
              .then((data) => {
                if (data.insertedId) {
                  reset();
                  Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "User Created Successful",
                    showConfirmButton: false,
                    timer: 1500,
                  });
                  navigate("/");
                }
              })
          })
          .catch((error) => {
            console.log(error.message);
          });
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const handleShow = () => {
    setShow(!show);
  };

  return (
    <>
      <Helmet>
        <title>Bistro Boss | sign up</title>
      </Helmet>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center md:w-1/2 p-10 lg:text-left">
            <img src={authentication} alt="" />
          </div>
          <div className="card md:w-1/2 max-w-sm shadow-2xl bg-base-100">
            <h1 className="text-5xl font-bold text-center p-2 mt-5">
              Sign Up Now!
            </h1>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    type="text"
                    {...register("name", { required: true })}
                    placeholder="Name"
                    className="input input-bordered"
                    name="name"
                  />
                  {errors.name && (
                    <span className="text-red-600 mt-2">Name is required</span>
                  )}
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Photo URL</span>
                  </label>
                  <input
                    type="url"
                    {...register("photoURL", { required: true })}
                    placeholder="Input Your Photo Url"
                    className="input input-bordered"
                  />
                  {errors.photoURL && (
                    <span className="text-red-600 mt-2">
                      Photo URL is required
                    </span>
                  )}
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    {...register("email", { required: true })}
                    placeholder="Email"
                    className="input input-bordered"
                    name="email"
                  />
                  {errors.email && (
                    <span className="text-red-600 mt-2">Email is required</span>
                  )}
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <div className="flex relative">
                    <input
                      type={show ? "text" : "password"}
                      name="password"
                      placeholder="Password"
                      className="input input-bordered w-full"
                      {...register("password", {
                        required: true,
                        minLength: 6,
                        maxLength: 20,
                        pattern:
                          /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
                      })}
                    />
                    <span
                      className="text-2xl absolute right-5 top-3"
                      onClick={handleShow}
                    >
                      {show ? <FaEye></FaEye> : <FaEyeSlash></FaEyeSlash>}
                    </span>
                  </div>
                  {errors.password?.type === "required" && (
                    <p className="text-red-600">Password is required</p>
                  )}
                  {errors.password?.type === "minLength" && (
                    <p className="text-red-600">Password must be 6 character</p>
                  )}
                  {errors.password?.type === "maxLength" && (
                    <p className="text-red-600">
                      Password must be less than 20 character
                    </p>
                  )}
                  {errors.password?.type === "pattern" && (
                    <p className="text-red-600">
                      Password must be one uppercase letter one special
                      character one number & one lowercase letter
                    </p>
                  )}
                </div>
                <div className="form-control mt-6">
                  <input
                    className="btn btn-primary"
                    type="submit"
                    value="Sign Up"
                  />
                </div>
                <p className="text-center">
                  <small className="text-orange-400">
                    Already Registered ? <Link to="/login">Go to Login</Link>{" "}
                  </small>
                </p>
              </div>
            </form>
            <SocialLogin></SocialLogin>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
