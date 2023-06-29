import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import * as yup from "yup";
import { useFormik } from "formik";
import { register } from "../../Redux/Auth/AuthAction";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect } from "react";

//validation
let schema = yup.object().shape({
  email: yup
    .string()
    .email("Email should be valid")
    .required("Email is required"),
  password: yup.string().required("Password is required"),
  name: yup.string().required("Name is required"),
});

export default function Register() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const authState = useSelector((state) => state.auth);

  const { isRegisterSuccess, message } = authState;

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      name: "",
    },
   
    
   
    validationSchema: schema,
    onSubmit: (values) => {
      console.log("Form submitted", values);
      //console.log(values);
      dispatch(register(values));
    },
  });

  useEffect(() => {
    if (isRegisterSuccess) {
      toast.success(message);
      navigate("/"); // to login
    } else {
      navigate("/register");
    }
  }, [navigate, isRegisterSuccess]);

  return (
    <div className="container bordered-container">
      <div className="row w-530">
        <div className="col-sm-12 d-flex loginform">
          <div className="login-card card-block auth-body">
            <div className="authbox">
              <h1 className="brand-logo text-center">Instagram</h1>
              <h6 className="text-secondary text-center">
                Sign up to see photos and videos<br></br> from your friends
              </h6>
              <br />
              <div className="m-t-20">
                <button className="btn btn-primary btn-md btn-block m-b-10 login-facebook-btn">
                  Login with Facebook
                </button>
              </div>
              <div style={{ textAlign: "center", padding: "5px" }}>
                <h6>Or</h6>
              </div>

              <ToastContainer />
              <div className="col-12">
                <form className="w-100" onSubmit={formik.handleSubmit}>
                  <div className="input-group">
                    <span className="input-group-addon">
                      <i className="icofont icofont-email"></i>
                    </span>
                    <input
                      type="email"
                      placeholder="Email Address"
                      className="form-control smaller-placeholder"
                      required
                      autoComplete="off"
                      value={formik.values.email}
                      onChange={formik.handleChange("email")}
                    />
                  </div>
                  <div className="input-group">
                    <span className="input-group-addon">
                      <i className="icofont icofont-name"></i>
                    </span>
                    <input
                      type="text"
                      placeholder="Name"
                      className="form-control smaller-placeholder"
                      required
                      autoComplete="off"
                      value={formik.values.name}
                      onChange={formik.handleChange("name")}
                    />
                  </div>
                  <div className="input-group">
                    <span className="input-group-addon">
                      <i className="icofont icofont-name"></i>
                    </span>
                    <input
                      type="text"
                      placeholder="FullName"
                      className="form-control smaller-placeholder"
                      required
                      autoComplete="off"
                      value={formik.values.name}
                      onChange={formik.handleChange("fullname")}
                    />
                  </div>
                  <div className="input-group">
                    <span className="input-group-addon">
                      <i className="icofont icofont-password"></i>
                    </span>
                    <input
                      type="password"
                      placeholder="Password"
                      className="form-control smaller-placeholder"
                      required
                      autoComplete="off"
                      value={formik.values.password}
                      onChange={formik.handleChange("password")}
                    />
                  </div>
                  <div className="container text-center">
                    <p className="small">
                      People who use our service may have uploaded <br></br>your
                      contact information to Instagram.
                      <a href="https://example.com/learn-more">Learn more</a>
                    </p>
                    <p className="small">
                      By signing up, you agree to our{" "}
                      <a href="https://example.com/terms">Terms</a>,
                      <a href="https://example.com/privacy-policy">
                        Privacy <br></br>Policy
                      </a>
                      , and{" "}
                      <a href="https://example.com/cookies-policy">
                        Cookies Policy
                      </a>
                      .
                    </p>
                  </div>
                  <div className="m-t-10 text-center">
                    <div className="forgot-password">
                      Have an Account?
                      <Link to="/" className="text-right f-w-600 text-inverse">
                        <i className="icofont icofont-lock"></i> Login
                      </Link>
                    </div>
                  </div>
                  <br />
                  <div className="m-t-20">
                    <button
                      className="btn btn-primary btn-md btn-block m-b-10 signupbtn"
                      type="submit"
                    >
                      Sign Up
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
