import React from "react";

function Input({ label, placeholder, name, type = "text", value, onChange }) {
  return (
    <label className="form_label">
      <input
        className="form_input"
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
