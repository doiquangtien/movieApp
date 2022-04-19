import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./auth.scss";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../../firebase";
import { doc, serverTimestamp, setDoc } from "firebase/firestore";
import ModalLoading from "../ModalLoading/ModalLoading";
const schema = yup.object().shape({
  firstname: yup.string().required("This field must be required!"),
  lastname: yup.string().required("This field must be required!"),
  email: yup.string().required("This field must be required!").email(),
  password: yup.string().required("This field must be required!").min(6),
  cf_password: yup
    .string()
    .required("This field must be required!")
    .min(6)
    .oneOf([yup.ref("password")], "Not match with password"),
});

function RegisterForm(props) {
  const navigate = useNavigate();
  const [messageErr, setMessageErr] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleRegister = async ({ firstname, lastname, email, password }) => {
    setLoading(true);
    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      const user_id = res.user.uid;
      await setDoc(doc(db, "users", user_id), {
        firstname: firstname,
        lastname: lastname,
        email: email,
        phonenumber: "",
        user_id: user_id,
        country: "",
        img: "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg",
        history: [],
        favorites: [],
        timeStamp: serverTimestamp(),
      });
      setLoading(false);

      navigate("/login");
    } catch (err) {
      setLoading(false);
      setMessageErr(true);
    }
  };
  return (
    <>
      <ModalLoading load={loading} />

      <Formik
        initialValues={{
          firstname: "",
          lastname: "",
          email: "",
          password: "",
          cf_password: "",
        }}
        validationSchema={schema}
        onSubmit={(values) => {
          handleRegister(values);
        }}
      >
        {(props) => {
          return (
            <div className="split-screen">
              <div className="left">
                <section className="copy">
                  <h1>Welcome to Movie World</h1>
                  <p>Over 500 free Movie</p>
                </section>
              </div>
              <div className="right">
                <div className="form-bg">
                  <Form>
                    <section className="copy">
                      <h2>Sign Up</h2>
                      <div className="login-container">
                        <p>
                          Already have an account?
                          <Link to="/login">
                            <strong>Login Now</strong>
                          </Link>
                        </p>
                      </div>
                    </section>

                    <div className="input-container fullname">
                      <div className="col-6">
                        <label htmlFor="firstname">First Name</label>
                        <Field
                          type="text"
                          id="firstname"
                          name="firstname"
                          placeholder="John"
                          style={
                            props.errors.firstname && props.touched.firstname
                              ? { border: "solid 1px red" }
                              : null
                          }
                        />
                        <small
                          className="form-text text-danger"
                          style={{ color: "red" }}
                        >
                          <ErrorMessage name="firstname" />
                        </small>
                      </div>
                      <div className="col-6">
                        <label htmlFor="lastname">Last Name</label>
                        <Field
                          type="text"
                          id="lastname"
                          name="lastname"
                          placeholder="Wick"
                          style={
                            props.errors.lastname && props.touched.lastname
                              ? { border: "solid 1px red" }
                              : null
                          }
                        />
                        <small
                          className="form-text text-danger"
                          style={{ color: "red" }}
                        >
                          <ErrorMessage name="lastname" />
                        </small>
                      </div>
                    </div>
                    <div className="input-container email">
                      <label htmlFor="InputEmail">Email</label>
                      <Field
                        type="email"
                        id="InputEmail"
                        name="email"
                        placeholder="MovieWorld@gmail.com"
                        style={
                          props.errors.email && props.touched.email
                            ? { border: "solid 1px red" }
                            : null
                        }
                      />
                      {messageErr && (
                        <span style={{ color: "red" }}>
                          Email already exists !
                        </span>
                      )}
                      <small
                        className="form-text text-danger"
                        style={{ color: "red" }}
                      >
                        <ErrorMessage name="email" />
                      </small>
                    </div>

                    <div className="input-container password">
                      <label htmlFor="exampleInputPassword1">Password</label>
                      <Field
                        type={"password"}
                        id="exampleInputPassword1"
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
                    <div className="input-container password">
                      <label htmlFor="cf_password">Confirm Password</label>
                      <Field
                        type={"password"}
                        id="cf_password"
                        name="cf_password"
                        placeholder="••••••••••••"
                        style={
                          props.errors.cf_password && props.touched.cf_password
                            ? { border: "solid 1px red" }
                            : null
                        }
                      />
                      <small
                        className="form-text text-danger"
                        style={{ color: "red" }}
                      >
                        <ErrorMessage name="cf_password" />
                      </small>
                    </div>
                    <button type="submit" className="signup-btn">
                      Register
                    </button>
                  </Form>
                </div>
              </div>
            </div>
          );
        }}
      </Formik>
    </>
  );
}

export default RegisterForm;
