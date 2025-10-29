import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Crops from "./pages/Crops";
import MainLayout from "./layouts/Mainlayout";

function App() {
  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/crops" element={<Crops />} />
      </Routes>
    </MainLayout>
  );
}

export default App;
