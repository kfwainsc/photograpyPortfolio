/*** Styles stylesPhotoGrid.js ***/
/* Project: Photography Portfolio for KW Studios 
   Descript: Showcase of fine art and commercial photography
   Created: Kendra Wainscott  2022

   Styles for PhotoGird Component
   Organized by major section, then alphabetically
*/
//const black = "rgb(0, 0, 0)";
const white = "rgb(255. 255, 255)";

const grid = {
  width: "100%",
  padding: "1rem",
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(20rem, 1fr))",
  gridGap: "1rem 1rem",
  justifyItems: "center",
  alignItems: "center",
  color: white,
};
const gridImg = {
  maxWidth: "100%",
  maxHeight: "10rem",
};

export const photoGridStyles = {
  grid: grid,
  gridImg: gridImg,
};
