/*** HOMEPAGE PAGE  <HomePage /> ***/
/* Project: Photography Portfolio for KW Studios 
   Descript: Showcase of fine art and commercial photography
   Created: Kendra Wainscott  2022
*/
import {Routes, Route} from "react-router-dom";
import {NavBar} from "../components/NavBar/NavBar.js";
import {HomePage} from "../pages/HomePage";
import {ProjectPage} from "../pages/ProjectPage";
import {appStyles as styles} from "./stylesApp.js";
function App() {
  return (
    <div style={styles.app}>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/:title" element={<ProjectPage />} />
      </Routes>
    </div>
  );
}

export default App;
