import React from "react";

function FormField(props) {
  const { label, type, placeholder, id } = props;

  return (
    <>
      <label htmlFor={`#${id}`} className="text-gray-dark">
        {label}
      </label>
      <input
        type={type}
        className="block w-full rounded border-gray focus:border-accent focus:ring-accent"
        placeholder={placeholder}
        id={id}
        {...props}
      />
    </>
  );
}

export default FormField;
