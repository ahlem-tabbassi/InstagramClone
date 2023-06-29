import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import * as yup from "yup";
import { useFormik } from "formik";
import { login } from "../../Redux/Auth/AuthAction";
import { toast } from "react-toastify";

// Validation schema
let schema = yup.object().shape({
  email: yup
    .string()
    .email("Email should be valid")
    .required("Email is required"),
  password: yup.string().required("Password is required"),
});

export default function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const authState = useSelector((state) => state.auth);
  const { user, isError, isLoading, isLoginSuccess } = authState;

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: schema,
    onSubmit: async (values) => {
      console.log("Form submitted:", values); // Debug statement

      try {
        await dispatch(login(values));
        console.log("Login dispatch successful"); // Debug statement
        window.location.reload(true);
      } catch (error) {
        console.error("Login dispatch error:", error); // Debug statement
      }
    },
  });

  useEffect(() => {
    console.log("isLoginSuccess:", isLoginSuccess); // Debug statement
    if (isLoginSuccess) {
      navigate("/home");
    } else {
      navigate("/");
    }
  }, [isError, isLoginSuccess, navigate]);

  console.log("authState:", authState); // Debug statement

  return (
    <div className="container-fluid  bordered-content">
      <div className="row w-530">
        <div className="col-sm-12 d-flex">
          <div className="login-card card-block auth-body">
            <div className="authbox">
              <h1 className="brand-logo text-center">Instagram</h1>
              <br />
              <div className="col-12">
                <form className="w-100" onSubmit={formik.handleSubmit}>
                  <div className="input-group">
                    <span className="input-group-addon">
                      <i className="icofont icofont-email"></i>
                    </span>
                    <input
                      type="email"
                      placeholder="Phone number,username or email address"
                      className="form-control smaller-placeholder"
                      required
                      autoComplete="off"
                      value={formik.values.email}
                      onChange={formik.handleChange("email")}
                    />
                  </div>
                  <div className="input-group">
                    <span className="input-group-addon">
                      <i className="icofont icofont-email"></i>
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

                  <br />
                  <div className="m-t-20">
                    <button
                      className="btn btn-primary btn-md btn-block m-b-10 loginbtn"
                      type="submit"
                    >
                      Log In
                    </button>
                    <br />
                  </div>
                  <div style={{ textAlign: "center", padding: "5px" }}>
                    <h6>Or</h6>
                    {<div className="m-t-20">
                      <button className="btn btn-primary btn-md btn-block m-b-10 login-facebook-btn">
                        Login with Facebook
                      </button>
                      <br></br>
                    </div>}
                    <div className="m-t-10 text-center d-flex">
                      <div className="forgot-password">
                        <Link
                          to="/forgotpassword"
                          className="text-right f-w-600 text-inverse"
                        >
                          <i className="icofont icofont-lock"></i> Forgotten
                          your password?
                        </Link>
                      </div>
                    </div>
                    <div className="register-border">
                      Don't have an account yet?{" "}
                      <Link to="/register" className="w-400px">
                        Register
                      </Link>
                    </div>
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
