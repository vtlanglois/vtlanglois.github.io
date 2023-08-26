import React from "react";

const Button = ({ href, label, className}) => {
  return (
    <div>
      <a
        className={`link-button ${className}`}
        tabIndex="0"
        href={href}
        target="_blank"
        rel="nofollow"
      >
        {label}
      </a>
    </div>
  );
};

export default Button;
