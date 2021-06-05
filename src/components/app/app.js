import "../../stylesheets/main.scss";
import { Header } from "../header/header.jsx";
import { Body } from "../home/body.jsx";
import { Footer } from "../footer/footer.jsx";

function App() {
  return (
    <div className="App">
      <Header />
      <Body />
      <Footer />
    </div>
  );
}

export default App;
