import React from "react";

export const Input = ({
  name,
  value,
  handleChange,
  handleBlur,
  errors,
  touched,
}) => {
  const inputType = name === "login" ? "email" : "password";
  return (
    <>
      <input
        className="form_input"
        name={name}
        placeholder={`Your ${name}`}
        onChange={handleChange}
        type={inputType}
        onBlur={handleBlur}
      />
      {touched && errors ? <span className="errors">{errors}</span> : null}
    </>
  );
};
export default Input;
