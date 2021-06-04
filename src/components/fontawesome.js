import ReactDOM from "react-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faCheckSquare, faCoffee } from "@fortawesome/free-solid-svg-icons";

library.add(fab, faCheckSquare, faCoffee);


// examples

// <FontAwesomeIcon icon="coffee" symbol />
// <FontAwesomeIcon icon="coffee" symbol="beverage-icon" />
// <FontAwesomeIcon icon="coffee" border />
// <FontAwesomeIcon icon="coffee" flip="horizontal" />
// <FontAwesomeIcon icon="coffee" flip="vertical" />
// <FontAwesomeIcon icon="coffee" flip="both" />
// <FontAwesomeIcon icon="coffee" rotation={90} />
// <FontAwesomeIcon icon="coffee" rotation={180} />
// <FontAwesomeIcon icon="coffee" rotation={270} />
// <FontAwesomeIcon icon="coffee" listItem />
// <FontAwesomeIcon icon="coffee" fixedWidth />
// <FontAwesomeIcon icon="coffee" inverse />
// <FontAwesomeIcon icon="coffee" pull="left" />
// <FontAwesomeIcon icon="coffee" pull="right" />
// <FontAwesomeIcon icon={["fad", "coffee"]} />
// <FontAwesomeIcon icon={["fad", "coffee"]} swapOpacity />
// <FontAwesomeIcon icon="spinner" className="highlight" />
// <FontAwesomeIcon icon="coffee" transform="shrink-6 left-4" />
// <FontAwesomeIcon icon="coffee" transform={{ rotate: 42 }} />
// <FontAwesomeIcon icon="coffee" mask={["far", "circle"]} />
