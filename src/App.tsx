import "./App.scss";
import AboutPage from "./pages/AboutPage";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { Route, Routes } from "react-router-dom";
import TablePage from "./pages/TablePage";

function App() {
  return (
    <div className="container_app">
      <Header />
      <div className="content">
        <Routes>
          <Route path="/" element={<TablePage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
