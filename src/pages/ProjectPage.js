/*** PROJECT PAGE  <ProjectPage /> ***/
/* Project: Photography Portfolio for KW Studios 
   Descript: Showcase of fine art and commercial photography
   Created: Kendra Wainscott  2022
*/
import React from "react";
import {useParams} from "react-router-dom";
import "./pageStyles/projectPage.css";
import {imgList} from "../images/imgList.js";
import {PhotoGrid} from "../components/PhotoGrid/PhotoGrid";

export function ProjectPage() {
  const {title} = useParams();
  console.log(title);
  return (
    <header>
      <h1>PROJECT PAGE</h1>
      <h2>Subtitle </h2>
      <PhotoGrid imgList={imgList[title]} />
    </header>
  );
}
