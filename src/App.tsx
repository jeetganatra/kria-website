import { Header } from "./Components/Header";
import { Home } from "./Pages/Home";
import {
  Routes,
  Route,
  useParams,
  BrowserRouter,
} from "react-router-dom";
import "./App.css";
import { ContactUs } from "./Pages/ContactUs";
import {
  lazy,
  Suspense,
  useEffect,
  type ComponentType,
  type LazyExoticComponent,
} from "react";
import { useLocation } from "react-router-dom";

const projectComponents: Record<
  string,
  LazyExoticComponent<ComponentType>
> = {
  "1": lazy(() =>
    import(
      "./Components/ProjectDetails/PujyaPark"
    ).then((module) => ({
      default: module.PujyaPark,
    })),
  ),
  "2": lazy(() =>
    import(
      "./Components/ProjectDetails/BhavitaPark"
    ).then((module) => ({
      default: module.BhavitaPark,
    })),
  ),
  "3": lazy(() =>
    import(
      "./Components/ProjectDetails/ShilpSolitaire"
    ).then((module) => ({
      default: module.ShilpSolitaire,
    })),
  ),
  "4": lazy(() =>
    import(
      "./Components/ProjectDetails/HouseOfNarratives"
    ).then((module) => ({
      default: module.HouseOfNarratives,
    })),
  ),
  "5": lazy(() =>
    import(
      "./Components/ProjectDetails/ShilpSerene"
    ).then((module) => ({
      default: module.ShilpSerene,
    })),
  ),
  "6": lazy(() =>
    import(
      "./Components/ProjectDetails/TheCourtyardHouse"
    ).then((module) => ({
      default: module.TheCourtyardHouse,
    })),
  ),
  "7": lazy(() =>
    import(
      "./Components/ProjectDetails/SiddhamCoolers"
    ).then((module) => ({
      default: module.SiddhamCoolers,
    })),
  ),
};

const ProjectsPage = lazy(() =>
  import("./Pages/Projects").then((module) => ({
    default: module.ProjectsPage,
  })),
);

function ProjectRouter() {
  const { id } = useParams<{ id: string }>();
  const Component = id
    ? projectComponents[id]
    : null;

  if (!Component)
    return <div>Project not found</div>;
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
        <Suspense fallback={null}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/projects"
              element={<ProjectsPage />}
            />
            <Route
              path="/contact-us"
              element={<ContactUs />}
            />
            <Route
              path="/project/:id"
              element={<ProjectRouter />}
            />
          </Routes>
        </Suspense>
      </div>
    </BrowserRouter>
  );
}

export default App;
