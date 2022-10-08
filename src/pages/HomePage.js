/*** HOMEPAGE PAGE  <HomePage /> ***/
/* Project: Photography Portfolio for KW Studios 
   Descript: Showcase of fine art and commercial photography
   Created: Kendra Wainscott  2022
*/
import React from "react";
import {homePageStyles as styles} from "./pageStyles/stylesHomePage.js";
import {NavLink} from "react-router-dom";
import {Hero} from "../components/Hero/Hero";
import {projectOverviews} from "../contentLists/projectOverviews.js";
import {ProjectPreview} from "../components/ProjectPreview/ProjectPreview";
//import {imgList} from "../images/imgList.js";
export function HomePage() {
  return (
    <div>
      <header style={styles.header}>
        <h1>Kendra Wainscott Studios</h1>
        <h2>Fine Art & Commercial Photography</h2>
        <Hero />
      </header>
      <div style={styles.overviewsContainer}>
        {projectOverviews.map((project) => (
          <NavLink to={project.path} key={project.title} className={"nav-link"}>
            <ProjectPreview overview={project} />
          </NavLink>
        ))}
      </div>
    </div>
  );
}
