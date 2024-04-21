import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap";
import Appbar from "./components/Appbar";
import Home from "./components/Home";
import Footer from "./components/Footer";
import About from "./components/About";
import OurBrands from "./components/OurBrands";
import Infrastructure from "./components/Infrastructure";
import Team from "./components/Team.js";

function App() {
  return (
    <div className="App">
      <Appbar />
      <Home />
      <About />
      <Infrastructure />
      <OurBrands />
      <Team />

      <Footer />
    </div>
  );
}

export default App;
