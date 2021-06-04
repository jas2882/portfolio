import "./stylesheets/main.scss";
import { Header } from "./components/header/header.jsx";
import { Body } from "./components/home/body.jsx";
import { Footer } from "./components/footer/footer.jsx";

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
