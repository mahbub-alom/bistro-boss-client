import React, { useContext, useEffect, useRef, useState } from "react";
import authentication from "../../assets/others/authentication2.png";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import Swal from "sweetalert2";
import { AuthContext } from "../../Providers/AuthProviders";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { FaEyeSlash, FaEye } from "react-icons/fa";

const Login = () => {
  const [password, setPassword] = useState('')
  console.log(password);
  const [show, setShow] = useState(false);

  const handleShow = () => {
    setShow(!show)
  }
  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  const { signIn } = useContext(AuthContext);

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    setPassword(password)
    signIn(email, password)
      .then(result => {
        const loggedUser = result.user;
        console.log(loggedUser);
      })
      .catch(error => {
      console.log(error.message);
    })
  };

  const captchaRef = useRef(null);
  console.log(captchaRef);
  const [disable, setDisable] = useState(true);
  const handleCaptchaValidate = () => {
    const value = captchaRef.current.value;
    if(validateCaptcha(value)) {
      setDisable(false)
      Swal.fire("Good!", "Your captcha is correct!", "success");
    }
    else {
      setDisable(true)
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Captcha is wrong!",
      });
    }
  };

  return (
    <>
      <Helmet>
        <title>Bistro Boss | Login</title>
      </Helmet>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center md:w-1/2 lg:text-left">
            <img src={authentication} alt="" />
          </div>
          <div className="card md:w-1/2 max-w-sm shadow-2xl bg-base-100">
            <h1 className="text-5xl font-bold text-center mt-5">Login now!</h1>
            <form onSubmit={handleLogin}>
              <div className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    placeholder="email"
                    className="input input-bordered"
                    name="email"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <div className="flex relative">
                    <input
                      type={show ? "text" : "password"}
                      name="password"
                      placeholder="password"
                      className="input input-bordered w-full"
                    />
                    {password && (
                      <span
                        className="text-2xl absolute right-5 top-3"
                        onClick={handleShow}
                      >
                        {show ? <FaEye></FaEye> : <FaEyeSlash></FaEyeSlash>}
                      </span>
                    )}
                  </div>
                </div>
                <div className="form-control">
                  <label className="label">
                    <LoadCanvasTemplate />
                  </label>
                  <input
                    ref={captchaRef}
                    type="text"
                    name="captcha"
                    placeholder="type the captcha above"
                    className="input input-bordered"
                  />
                  <button
                    onClick={handleCaptchaValidate}
                    className="btn btn-outline btn-primary btn-xs mt-2"
                  >
                    validate
                  </button>
                </div>
                <div className="form-control mt-6">
                  <input
                    disabled={disable}
                    className="btn btn-primary"
                    type="submit"
                    value="Login"
                  />
                </div>
                <p className="text-center">
                  <small className="text-orange-400">
                    New here ? <Link to="/signUp">Create New Account</Link>{" "}
                  </small>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
