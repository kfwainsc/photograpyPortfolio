/*** PROJECTPREVIEW COMPONENT  <ProjectPreview {projectOverview}/> ***/
/* Project: Photography Portfolio for KW Studios 
   Descript: Showcase of fine art and commercial photography
   Created: Kendra Wainscott  2022
*/
import PropTypes from "prop-types";
import {projectPreviewStyles as styles} from "./stylesProjectPreview.js";

export function ProjectPreview({overview}) {
  return (
    <figure style={styles.figure}>
      <img src={overview.imgSrc} alt={overview.alt} style={styles.img} />
      <figcaption>{overview.caption}</figcaption>
    </figure>
  );
}
ProjectPreview.propTypes = {
  overview: PropTypes.object.isRequired,
};
