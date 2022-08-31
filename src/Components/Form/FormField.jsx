import React from "react";

function FormField(props) {
  const { label, type, placeholder, id } = props;

  return (
    <>
      <label htmlFor={`#${id}`}>{label}</label>
      <input
        type={type}
        className="block w-full rounded border-gray focus:border-primary focus:ring-primary"
        placeholder={placeholder}
        id={id}
        {...props}
      />
    </>
  );
}

export default FormField;
