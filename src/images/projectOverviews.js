/*** projectOverviews.js ***/
/* Project: Photography Portfolio for KW Studios 
   Descript: Showcase of fine art and commercial photography
   Created: Kendra Wainscott  2022
*/
import {imgList} from "./imgList.js";
export const projectOverviews = [
  {
    path: "flyingPieces",
    title: "Flying Pieces",
    imgSrc: require("./flyingPieces/flyingPiecesPreview.jpg"),
    alt: "Stars will pour themselves over you. Chunks of rock, gas, glass and other brilliant things will get caught on you, all over.",
    caption: "caption",
    description: "Art things",
  },
  {
    path: "gatherings",
    title: "Gatherings",
    imgSrc: require("./gatherings/receptionPreview.jpg"),
    alt: "At a reception lit by tiki troches, two people are caught candidly smiling. A beach at twilight is visible in the background. Location: Hawaii, USA",
    caption: "caption",
    description: "Stuff",
  },
  {
    path: "wild",
    title: "Wild",
    imgSrc: require("./wild/wildPreview.jpg"),
    alt: "Foreground is a triangle of upright rock with a pink sunset background. Location: Badlands National Park, USA",
    caption: "caption",
    description: "wild",
  },
];
