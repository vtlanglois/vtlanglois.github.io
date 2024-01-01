import React from "react";

const Emoji = ({ className, children }) => {
  return (
    <span
      className={className ? `me-1 ${className}` : `me-1`}
      role="img"
      alt=""
      aria-hidden="true"
    >
      {children}
    </span>
  );
};

export default Emoji;
