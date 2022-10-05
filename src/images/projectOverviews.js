/*** projectOverviews.js ***/
/* Project: Photography Portfolio for KW Studios 
   Descript: Showcase of fine art and commercial photography
   Created: Kendra Wainscott  2022
*/
import {imgList} from "./imgList.js";
export const projectOverviews = {
  flyingPieces: {
    title: "Flying Pieces",
    img: imgList.flyingPieces[1],
    caption: "caption",
    description: "Art things",
  },
  gatherings: {
    title: "Gatherings",
    img: require("./gatherings/hawaiiReceptionDinner.jpg"),
    description: "Stuff",
  },
  wild: {
    title: "Wild",
    img: require("./wild/badlandsSunset.jpg"),
    description: "wild",
  },
};
