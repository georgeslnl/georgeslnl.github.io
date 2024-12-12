import { HashRouter as Router, Routes, Route } from "react-router-dom";
import About from "./Pages/About";
import Home from "./Pages/Home";
import ScrollToTop from "./Components/ScrollToTop";
import ProjectDetails from "./Pages/ProjectDetails";
import NotFound from "./Pages/NotFound";

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Router>
        <ScrollToTop />
        <main className="flex-grow flex flex-col p-12 md:p-24 md:mx-24">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about-me" element={<About />} />
            <Route path="/projects/:id" element={<ProjectDetails />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;
