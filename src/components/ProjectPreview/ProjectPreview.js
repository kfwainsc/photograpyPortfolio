/*** PROJECTPREVIEW COMPONENT  <ProjectPreview {projectOverview}/> ***/
/* Project: Photography Portfolio for KW Studios 
   Descript: Showcase of fine art and commercial photography
   Created: Kendra Wainscott  2022
*/
import PropTypes from "prop-types";
import {projectPreviewStyles as styles} from "./stylesProjectPreview.js";
import {projectOverviews} from "../../images/projectOverviews.js";

export function ProjectPreview({title}) {
  const info = projectOverviews[title];
  return (
    <figure style={styles.figure}>
      <img src={info.img.src} alt={info.img.alt} style={styles.img} />
      <figcaption>{info.caption}</figcaption>
    </figure>
  );
}
ProjectPreview.propTypes = {
  title: PropTypes.string.isRequired,
};
