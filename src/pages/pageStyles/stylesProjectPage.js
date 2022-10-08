/*** Styles stylesProjectPage.js ***/
/* Project: Photography Portfolio for KW Studios 
   Descript: Showcase of fine art and commercial photography
   Created: Kendra Wainscott  2022

   Styles for ProjectPage Page 
   Organized by major section, then alphabetically
*/
import {colorPaletteMaster as c} from "../../colorPaletteMaster";
const h1 = {
  padding: "2rem 0",
  fontSize: "3rem",
  textAlign: "center",
  letterSpacing: "1rem",
  textTransform: "uppercase",
  //filter: "opacity(.9)",
};
const header = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: c.darkgray,
  color: c.gray,
};
export const projectPageStyles = {
  h1: h1,
  header: header,
};
