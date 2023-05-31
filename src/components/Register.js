import React, { useContext } from "react";
import Drooling from "../assets/menu/drooling-face.svg";
import apple from "../assets/login/bitten-apple.svg";
import grapes from "../assets/login/grapes.svg";
import leaf from "../assets/login/leaf 2.svg";
import orange from "../assets/login/orange.svg";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import Input from "./Input";
import { useNav } from "../hooks/useNav";
import { useFormik } from "formik";
import * as Yup from "yup";
import { AuthContext } from "../context/AuthContext";
import { setLoading } from "../redux/reducers/authSlice";
function Register() {
  const auth = getAuth();
  const { goTo } = useNav();

  const { setCurrentUser } = useContext(AuthContext);

  const { handleSubmit, handleChange, values, touched, errors, handleBlur } =
    useFormik({
      initialValues: {
        login: "",
        password: "",
        confirmPassword: "",
      },
      validationSchema: Yup.object({
        login: Yup.string()
          .max(30, "Login mus be shorter than 30 characters")
          .required(),
        password: Yup.string()
          .min(8, "Password must be longer than 8 characters")
          .required(),
        confirmPassword: Yup.string()
          .oneOf([Yup.ref("password"), null], "Passwords must match")
          .required("Please confirm your password"),
      }),
      onSubmit: async (values) => {
        try {
          await createUserWithEmailAndPassword(
            auth,
            values.login,
            values.password
          );
          setCurrentUser(values.login);
          goTo("/login");
        } catch (error) {
          alert("Enter the correct password");
        } finally {
          setLoading(false);
        }
      },
    });

  const inputData = ["login", "password", "confirmPassword"];

  return (
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
        <form className="form_wrap" onSubmit={handleSubmit}>
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
          <button className="button" type="submit">
            Register
          </button>
        </form>
      </div>
      <div className="form_images">
        <img className="form_img_3" src={apple} alt="form" />
        <img className="form_img_4" src={orange} alt="form" />
      </div>
    </div>
  );
}

export default Register;
