/*** HOMEPAGE PAGE  <HomePage /> ***/
/* Project: Photography Portfolio for KW Studios 
   Descript: Showcase of fine art and commercial photography
   Created: Kendra Wainscott  2022
*/
import "./App.css";
import {Routes, Route} from "react-router-dom";
import {HomePage} from "./pages/HomePage";
import {ProjectPage} from "./pages/ProjectPage";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/:title" element={<ProjectPage />} />
      </Routes>
    </div>
  );
}

export default App;
