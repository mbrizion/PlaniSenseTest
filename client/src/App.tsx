import TreesByDistrict from "./components/TreesByDistrict";
import TreesByGender from "./components/TreesByGender";
import { Route, Routes } from "react-router-dom";
import NotFound from "./components/NotFound";
import Home from "./components/Home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/district" element={<TreesByDistrict />} />
      <Route path="/gender" element={<TreesByGender />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
