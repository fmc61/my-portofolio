import About from "./pages/About/About";
import Layout from "./components/Layout/Layout";
import Techstack from "./pages/Techstack/Techstack";
import Projects from "./pages/Projects/Projects";
import { Education } from "./pages/Education/Education";
import WorkExp from "./pages/WorkExp/WorkExp";
import { Contact } from "./pages/Contact/Contact";
import ScrollToTop from "react-scroll-to-top";
import { useTheme } from "./Context/ThemeContext";
import MobileNav from "./components/MobileNav/MobileNav";


function App() {
  const [theme] = useTheme()
  return (
    <>
    <div id={theme}>
      <MobileNav />
      <Layout />
      <div className="container">
        <About />
        <Education />
        <Techstack />
        <Projects />
        <WorkExp />
        <Contact />
      </div>
      <div className="footer pb-3 ms-3">
        <h4 className="text-center">Made With 😍 FMC &copy; 2024</h4>
      </div>
      </div>

      <ScrollToTop
        smooth
        color="#f29f67"
        style={{ backgroundColor: "#1e1e2c", borderRadius: "80px" }}
      />
    </>
  );
}

export default App;
