import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Layout from "./Layout/Layout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />}></Route>
        <Route path="about" element={<About />}></Route>
        <Route path="projects" element={<About />}></Route>
        <Route path="github" element={<About />}></Route>
        <Route path="contact" element={<About />}></Route>
      </Route>
    </Routes>
  );
}

export default App;
