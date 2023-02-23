import "../styles/App.css";

// Router Components
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Components
import Header from "../component/Header";
import Footer from "../component/Footer";

// Pages
import Home from "../pages/Home";
import About from "../pages/About";
import Favourite from "../pages/Favourite";
import Single from "../pages/Single";
import PageNotFound from "../pages/PageNotFound";
function AppRouter() {
  return (
    <BrowserRouter>
      <div className="wrapper">
        <Header />
        <main>
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/favourite" element={<Favourite />} />
            <Route path="/movie/:id" element={<Single />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default AppRouter;
