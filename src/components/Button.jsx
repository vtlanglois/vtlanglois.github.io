import React from "react";

const Button = ({ href, label }) => {
  return (
    <div>
      <a className="link-button" href={href} target="_blank" rel="nofollow">
        {label}
      </a>
    </div>
  );
};

export default Button;
