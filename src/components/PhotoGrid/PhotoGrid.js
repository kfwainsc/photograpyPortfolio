/*** PHOTOGRID <PhotoGrid /> ***/
/* Project: Photography Portfolio for KW Studios 
   Descript: Showcase of fine art commercial photography
   Created: Kendra Wainscott  2022
*/
import React from "react";
import PropTypes from "prop-types";
import {photoGridStyles as style} from "./stylesPhotoGrid";
//import "./photoGrid.css";
export function PhotoGrid({imgList}) {
  return (
    <ul style={style.grid}>
      {imgList.map((img) => (
        <figure key={img.name}>
          <img style={style.gridImg} src={img.src} alt={img.alt} />
          <figcaption>{img.name}</figcaption>
        </figure>
      ))}
    </ul>
  );
}
PhotoGrid.propTypes = {
  imgList: PropTypes.array.isRequired,
};
