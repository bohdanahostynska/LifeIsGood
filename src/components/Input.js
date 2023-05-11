import React from "react";

function Input({ label, placeholder, name, type = "text", value, onChange }) {
  return (
    <label style={{ display: "block" }}>
      <span>{label}</span>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        name={name}
      />
    </label>
  );
}

export default Input;
