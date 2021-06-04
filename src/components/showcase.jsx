import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "./fontawesome";

export const Beverage = () => {
  const coffee = faCoffee;
  return (
    <div>
      <span className="fa-layers fa-fw">
        <FontAwesomeIcon icon="square" color="green" />
        <FontAwesomeIcon icon="check" inverse transform="shrink-6" />
      </span>

      <FontAwesomeIcon icon="coffee" symbol />
      <FontAwesomeIcon icon="coffee" symbol="beverage-icon" />
    </div>
  );
};
