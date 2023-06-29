import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { resetnewPassword } from "../../Redux/Auth/AuthAction";
import { validEmail } from "../../Utils/Utils";


export default function ForgotPassword() {
  const [email, setEmail] = useState("");

  const dispatch = useDispatch();

  const authState = useSelector((state) => state.auth);
  const { isError, isNewPasswordSuccess, message } = authState;

  const resetPassword = async (e) => {
    e.preventDefault();
    if (validEmail(email)) {
      await dispatch(resetnewPassword(email));

      if (isNewPasswordSuccess) {
        await toast.success(message);
        setEmail("");
      } else if (isError) {
        await toast.error("Something went wrong");
      }
    } else {
      toast.error("Invalid Email");
      return;
    }
  };

  return (
    
    <div className="container bordered-container">
      <div className="row w-530">
        <div className="col-sm-12 d-flex">
          <div className="login-card card-block auth-body">
            <div className="authbox">
              <br />
              
              <ToastContainer />
              <div className="col-12">
                <form className="w-100" onSubmit={resetPassword}>
                  <div className="input-group">
                    <div className="lock-container">
                      <img
                        alt="lock"
                        src={require("C:/Users/Ahlem Tabbassi/Desktop/instagramClone/instaClone/client/src/Components/ForgotPassword/lock.png")}
                        className="lock-image"
                      />
                    </div>
                    <h5 className="head-class" style={{ marginTop: "10px",marginLeft: '20px' }}>
                      Trouble with logging in?
                    </h5>
                    <h6 className="text-secondary text-center">
                      Enter your email address, phone number or username, and
                      we'll send you a link to get back into your account.
                    </h6>
                    <input
                      type="email"
                      placeholder="Email Address"
                      className="form-control"
                      required
                      autoComplete="off"
                      onChange={(e) => setEmail(e.target.value)}
                      value={email}
                    />
                  </div>

                  <br />
                  <div className="m-t-20">
                    <button
                      className="btn btn-primary btn-md btn-block m-b-10 signupbtn"
                      type="submit"
                      style={{ fontFamily: "Arial" }}
                    >
                      Send Login Link
                    </button>
                    <br />
                    <br></br>
                    <div className="container text-center">
                      <p className="small" style={{ fontFamily: "Arial" }}>
                        <a href="https://help.instagram.com">
                          Can't reset your password?
                        </a>
                      </p>
                    </div>
                    <div
                      style={{
                        textAlign: "center",
                        padding: "5px",
                        fontFamily: "Arial",
                      }}
                    >
                      <h6>Or</h6>
                      <br />
                      <h6>Create New Account</h6>
                      <br></br>
                      <br></br>
                      <hr
                        style={{
                          height: "1px",
                          width: "60%",
                          marginLeft: "100px",
                          marginBottom: "30px",
                        }}
                      />
                      Go Back to login?{" "}
                      <Link to="/" className="w-400px">
                        Login
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
