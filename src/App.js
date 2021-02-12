import HeroSection from "./Components/HeroSection";
import Nav from "./Components/Nav";
import DetailSection from "./Components/DetailSection";
import "../src/Style/main.scss";
import HighlightsSection from "./Components/HighlightsSection";
import AirSection from "./Components/AirSection";
import Footer from "./Components/Footer";
import Cursor from "./Components/Cursor";

function App() {
  return (
    <>
    <Cursor />
      <div className="App">
        <Nav />
        <main className="main">
          <HeroSection />
          <DetailSection />
          <HighlightsSection />
          <AirSection />
        </main>
      </div>
      <div className="footer">
        <Footer />
      </div>
    </>
  );
}

export default App;
