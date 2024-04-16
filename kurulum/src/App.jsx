import "./App.css";
import Campaigns from "./components/Campaigns";
import Cards from "./components/Cards";
import Categories from "./components/Categories";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";

function App() {
  return (
    <>
      <Header />
      <HeroSection />
      <Categories />
      <div className="bg-slate-100 pt-10 pb-16">
        <Campaigns />
        <Cards />
      </div>

      <Footer />
    </>
  );
}

export default App;
