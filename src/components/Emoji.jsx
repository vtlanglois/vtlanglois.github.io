import React from "react";

const Emoji = ({ className, children }) => {
  return (
    <span className={`me-2 ${className}`} role="img" alt="" aria-hidden="true">
      {children}
    </span>
  );
};

export default Emoji;