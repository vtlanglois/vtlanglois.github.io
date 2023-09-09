import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Button = ({ href, label, icon}) => {
  return (
    <div className="align-self-center">
      <a
        className="link-button"
        tabIndex="0"
        href={href}
        target="_blank"
        rel="noreferrer"
      >
        {icon && <FontAwesomeIcon className="link-icon" icon={icon} />}
        {label}
      </a>
    </div>
  );
};

export default Button;
