import "./index.css";
import ScrollToTop from "./components/ScrollToTop";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import SellPhone from "./pages/SellPhone";

const App = () => {
  return (
    <div className="min-h-screen bg-white scroll-smooth">
      <Header />

      <main className="pt-16">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/jual-hp" element={<SellPhone />} />
        </Routes>
      </main>

      <Footer />

      <ScrollToTop />
    </div>
  );
}

export default App;