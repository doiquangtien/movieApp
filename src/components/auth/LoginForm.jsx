import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./auth.scss";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import { getCurrentUser } from "../../redux/typeSlice";
import { useDispatch } from "react-redux";
const schema = yup.object().shape({
  email: yup.string().required("This field must be required!").email(),
  password: yup.string().required("This field must be required!"),
});

function LoginForm(props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogin = ({ email, password }) => {
    console.log(email, password);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        navigate("/");
        dispatch(getCurrentUser(user));
      })
      .catch((error) => {
        console.log("sai");
      });
  };
  return (
    <Formik
      validationSchema={schema}
      initialValues={{ email: "", password: "" }}
      onSubmit={(values) => {
        handleLogin(values);
      }}
    >
      {(props) => {
        return (
          <div className="split-screen">
            <div className="left">
              <section className="copy">
                <h1>Welcome to Movie World</h1>
                <p>Over 500 free Movie </p>
              </section>
            </div>
            <div className="right">
              <div className="form-bg">
                <Form>
                  <section className="copy">
                    <h2>Sign In</h2>
                    <div className="login-container">
                      <p>
                        You don't have an account?
                        <Link to="/register">
                          <strong>Register Now</strong>
                        </Link>
                      </p>
                    </div>
                  </section>
                  <div className="input-container email">
                    <label htmlFor="InputEmail">Email</label>
                    <Field
                      type="email"
                      id="InputEmail"
                      name="email"
                      aria-describedby="emailHelp"
                      placeholder="Email@rankwork.com"
                      style={
                        props.errors.email && props.touched.email
                          ? { border: "solid 1px red" }
                          : null
                      }
                    />
                    <small
                      className="form-text text-danger"
                      style={{ color: "red" }}
                    >
                      <ErrorMessage name="email" />
                    </small>
                  </div>
                  <div className="input-container password">
                    <label htmlFor="InputPassword">Password</label>
                    <Field
                      type={"password"}
                      id="InputPassword"
                      name="password"
                      placeholder="••••••••••••"
                      style={
                        props.errors.password && props.touched.password
                          ? { border: "solid 1px red" }
                          : null
                      }
                    />
                    <small
                      className="form-text text-danger"
                      style={{ color: "red" }}
                    >
                      <ErrorMessage name="password" />
                    </small>
                  </div>
                  <div className="forgot">
                    <p>Forgot your password?</p>
                  </div>
                  <button type="submit" className="signup-btn">
                    Login
                  </button>
                </Form>
              </div>
            </div>
          </div>
        );
      }}
    </Formik>
  );
}

export default LoginForm;
