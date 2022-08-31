import React from "react";
import { Link } from "react-router-dom";

function SecondaryButton(props) {
  const { as, children, link } = props;

  switch (as) {
    case "submit":
      return (
        <button
          type="submit"
          className="px-4 py-1.5 bg-white text-accent font-semibold border-accent rounded border-2 hover:bg-accent hover:text-white transition-colors duration-200"
          {...props}
        >
          {children}
        </button>
      );

    case "link":
      return (
        <Link
          to={link || "/"}
          className="px-4 py-1.5 bg-white text-accent font-semibold border-accent rounded border-2 hover:bg-accent hover:text-white transition-colors duration-200"
          {...props}
        >
          {children}
        </Link>
      );

    default:
      return (
        <button
          type="button"
          className="px-4 py-1.5 bg-white text-accent font-semibold border-accent rounded border-2 hover:bg-accent hover:text-white transition-colors duration-200"
          {...props}
        >
          {children}
        </button>
      );
  }
}

export default SecondaryButton;
