/*** PROJECT PAGE  <ProjectPage /> ***/
/* Project: Photography Portfolio for KW Studios 
   Descript: Showcase of fine art and commercial photography
   Created: Kendra Wainscott  2022
*/
import React from "react";
import {useParams} from "react-router-dom";
//components
import {ArtistStatement} from "../components/ArtistStatement/ArtistStatement";
import {CarouselCompo as Carousel} from "../components/Carousel/Carousel.js";
import {PhotoGrid} from "../components/PhotoGrid/PhotoGrid";
//resources
import {imgList} from "../contentLists/imgList.js";
import {statementList} from "../contentLists/statementList";
//styles
import {projectPageStyles as styles} from "./pageStyles/stylesProjectPage";

export function ProjectPage() {
  const {title} = useParams();
  //const titleImg = imgList[title][0];
  const statement = statementList[title];
  return (
    <div>
      <header style={styles.header}>
        <h1 style={styles.h1}>{title}</h1>
      </header>

      {statement.length && (
        <ArtistStatement placement="bottom" btnTxt="read more" statement={statement} />
      )}
      <Carousel project={imgList[title]} />
    </div>
  );
}
//      <img src={titleImg.src} display="flex" width="100%" alt={titleImg.alt} />
