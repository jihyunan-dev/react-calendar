import React from "react";

const Input = (props) => {
  const { type, label, id, placeholder, value, _onChange } = props;

  if (type === "textarea") {
    return (
      <div>
        <label htmlFor={id}>{label}</label>
        <textarea id={id} onChange={_onChange} value={value}></textarea>
      </div>
    );
  }

  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input
        type={type}
        id={id}
        placeholder={placeholder}
        onChange={_onChange}
        value={value}
      />
    </div>
  );
};

Input.defaultProps = {
  id: Date.now(),
  label: "",
  placeholder: "",
  value: "",
};

export default Input;
