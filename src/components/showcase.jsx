import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./fontawesome";

// see FontAwesomeIcon.js to add icons and see examples

export const Beverage = () => (
  <div>
    <FontAwesomeIcon icon="check-square" />
    Your <FontAwesomeIcon icon="coffee" /> is hot and ready!
  </div>
);
