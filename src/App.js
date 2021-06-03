import "./stylesheets/main.scss";
import { Header } from "./components/header";
import { Body } from "../src/components/body";
import { Footer } from "./components/footer";

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
