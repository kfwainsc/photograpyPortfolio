/***  stylesArtistStatement.js ***/
/* Project: Photography Portfolio for KW Studios 
   Descript: Showcase of fine art and commercial photography
   Created: Kendra Wainscott  2022

   Styles for Artist Statement Component
   Organized by major section, then alphabetically
*/
import {colorPaletteMaster as c} from "../../colorPaletteMaster";

const btn = {
  fontSize: "2rem",
  backgroundColor: c.black,
  borderColor: c.gray,
  color: c.gray,
};
const btnHover = {
  fontSize: "2rem",
  backgroundColor: c.black,
  borderColor: c.white,
  color: c.white,
};
export const artistStatementStyles = {
  btn: btn,
  btnHover: btnHover,
};
