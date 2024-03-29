import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../../fontawesome";

// see FontAwesomeIcon.js to add icons and see examples

export const Showcase = () => (
  <div className="showcase">
    <FontAwesomeIcon
      id="github-icon"
      icon={["fab", "github"]}
      className="icon"
      size="2x"
    />
    <FontAwesomeIcon
      id="codepen-icon"
      icon={["fab", "codepen"]}
      className="icon-"
      size="3x"
    />
    <FontAwesomeIcon
      id="linkedin-icon"
      icon={["fab", "linkedin"]}
      className="icon"
      size="4x"
    />
  </div>
);
