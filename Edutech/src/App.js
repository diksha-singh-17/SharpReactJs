import "./App.css";
import Header from "./components/Header";
import Browse from "./components/Browse";
import Products from "./components/Products";
import Features from "./components/Features";
import Contact from "./components/Contact";
import Social from "./components/Social";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Browse />
      <Products />
      <Features />
      <Contact />
      <Social />
      <Footer />
    </div>
  );
}

export default App;
