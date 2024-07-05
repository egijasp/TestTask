import "./App.scss";
import AboutPage from "./pages/AboutPage";
import Header from "./components/Header/Header";
import Table from "./pages/TablePage";
import Footer from "./components/Footer/Footer";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="container_app">
      <Header />
      <div className="content">
        <Routes>
          <Route path="/" element={<Table />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
