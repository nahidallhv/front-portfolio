import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Skills from "./pages/Skills";
import Education from "./pages/Education";
import Experience from "./pages/Experience";
import Contact from "./pages/Contact";
import NotFoundPage from "./pages/NotFoundPage";
import Projects from "./pages/Projects";
import Header from "./pages/Header";

function App() {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects/>}/>
        <Route path="/education" element={<Education />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;
