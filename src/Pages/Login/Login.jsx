import React, { useEffect, useRef, useState } from "react";
import authentication from "../../assets/others/authentication2.png";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import Swal from "sweetalert2";

const Login = () => {
  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
  };

  const captchaRef = useRef(null);
  console.log(captchaRef);
  const [disable, setDisable] = useState(true);
  const handleCaptchaValidate = () => {
    const value = captchaRef.current.value;
    if(validateCaptcha(value)) {
      setDisable(false)
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
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                />
                {/* <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label> */}
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
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
