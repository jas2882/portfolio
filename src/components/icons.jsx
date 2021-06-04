import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckSquare, faCoffee } from "@fortawesome/fontawesome-free-solid";

export const Home = () => {
  return (
    <div className="App">
      <h1>
        <FontAwesomeIcon icon={faCoffee} />
      </h1>
    </div>
  );
};
export const CheckSquare = () => {
    return (
      <div className="App">
        <h1>
          <FontAwesomeIcon icon={faCheckSquare} />
        </h1>
      </div>
    );
  };