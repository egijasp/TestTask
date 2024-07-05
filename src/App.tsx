import "./App.scss";
import AboutPage from "./pages/AboutPage";
import Header from "./components/Header/Header";
import Table from "./pages/TablePage";
import Footer from "./components/Footer/Footer";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/table" element={<Table />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
