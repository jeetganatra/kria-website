import { Header } from "./Components/Header";
import { Home } from "./Pages/Home";
import { Routes, Route, useParams, BrowserRouter } from "react-router-dom";
import "./App.css";
import { ProjectsPage } from "./Pages/Projects";
import { PujyaPark } from "./Components/ProjectDetails/PujyaPark";
import { ContactUs } from "./Pages/ContactUs";
import { ShilpSolitaire } from "./Components/ProjectDetails/ShilpSolitaire";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { BhavitaPark } from "./Components/ProjectDetails/BhavitaPark";

const projectComponents: Record<string, React.FC> = {
  "1": ShilpSolitaire,
  "2": PujyaPark,
  "3": BhavitaPark,
};

function ProjectRouter() {
  const { id } = useParams<{ id: string }>();
  const Component = id ? projectComponents[id] : null;

  if (!Component) return <div>Project not found</div>;
  return <Component />;
}

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/project/:id" element={<ProjectRouter />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
