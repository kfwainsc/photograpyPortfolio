/*** HOMEPAGE PAGE  <HomePage /> ***/
/* Project: Photography Portfolio for KW Studios 
   Descript: Showcase of fine art and commercial photography
   Created: Kendra Wainscott  2022
*/
import React from "react";
import {NavLink} from "react-router-dom";
import {Hero} from "../components/Hero/Hero";
import {ProjectPreview} from "../components/ProjectPreview/ProjectPreview";
export function HomePage() {
  return (
    <div>
      <Hero />
      <header>
        <h1>Kendra Wainscott Studios</h1>
        <h2>Fine Art & Commercial Photography</h2>
      </header>
      <NavLink to="flyingPieces">
        <ProjectPreview title="flyingPieces" />
      </NavLink>
      <br />
      <NavLink to="gatherings">
        <ProjectPreview title="gatherings" />
      </NavLink>
      <br />
      <NavLink to="wild">Wild</NavLink>
      <br />
    </div>
  );
}
