import React, { useContext } from "react";
import { Input } from "./Input";
import Drooling from "../assets/menu/drooling-face.svg";
import apple from "../assets/login/bitten-apple.svg";
import grapes from "../assets/login/grapes.svg";
import leaf from "../assets/login/leaf 2.svg";
import orange from "../assets/login/orange.svg";
import { useSelector } from "react-redux";
import { signInWithEmailAndPassword, getAuth } from "firebase/auth";
import { useNav } from "../hooks/useNav";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { setLoading } from "../redux/reducers/authSlice";
import { useFormik } from "formik";
import * as Yup from "yup";
import { AuthContext } from "../context/AuthContext";

function Auth() {
  const auth = getAuth();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.auth);

  const { setCurrentUser } = useContext(AuthContext);
  const { goTo } = useNav();

  const { handleSubmit, handleChange, values, handleBlur, touched, errors } =
    useFormik({
      initialValues: {
        login: "",
        password: "",
      },
      validationSchema: Yup.object({
        login: Yup.string()
          .max(30, "Login mus be shorter than 30 characters")
          .required(),
        password: Yup.string()
          .min(8, "Password must be longer than 8 characters")
          .required(),
      }),
      onSubmit: async (values) => {
        console.log(values);
        await signInWithEmailAndPassword(
          auth,
          values.login,
          values.password
        ).then((userCredential) => {
          const user = userCredential.user;

          if (user) {
            setCurrentUser(user);
            localStorage.setItem("user", JSON.stringify(user));
            dispatch(setLoading(true));

            setTimeout(() => {
              goTo("/menu");
            }, 1000);
          }
        });
      },
    });

  const inputData = ["login", "password"];

  const onClick = () => {
    navigate("/register");
  };
  console.log(loading);
  return (
    <>
      <div className="form_container">
        <div className="form_images_top">
          <img className="form_img_1" src={grapes} alt="form" />
          <img className="form_img_2" src={leaf} alt="form" />
        </div>
        <div className="form_header">
          <h2 className="main_title-form">Welcome To Yelp App</h2>
          <img className="drooling-face" src={Drooling} alt="drooling" />
        </div>
        <div className="form_content">
          {inputData.map((item) => (
            <Input
              key={item}
              name={item}
              value={values[item]}
              handleChange={handleChange}
              handleBlur={handleBlur}
              touched={touched[item]}
              errors={errors[item]}
            />
          ))}
          <form className="form_wrap" onSubmit={handleSubmit}>
            <button className="button" type="submit" disabled={loading}>
              Login
            </button>
            <Link to="/register">don't have an account</Link>
          </form>
        </div>
        <div className="form_images">
          <img className="form_img_3" src={apple} alt="form" />
          <img className="form_img_4" src={orange} alt="form" />
        </div>
      </div>
    </>
  );
}

export default Auth;
