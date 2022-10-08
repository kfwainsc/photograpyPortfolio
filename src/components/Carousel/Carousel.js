/***  CAROUSEL.js  <CarouselCompo {imgList} /> ***/
/* Project: Photography Portfolio for KW Studios 
   Descript: Showcase of fine art and commercial photography
   Created: Kendra Wainscott  2022
*/
import React, {useState} from "react";
import PropTypes from "prop-types";
import Carousel from "react-bootstrap/Carousel";
import {carouselStyles as styles} from "./stylesCarousel";

export function CarouselCompo({project}) {
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <Carousel activeIndex={index} onSelect={handleSelect} interval={99999} style={styles.carousel}>
      {project.map((img) => (
        <Carousel.Item key={img.name}>
          <div style={styles.imgContain}>
            <img src={img.src} alt={img.alt} style={styles.img} className="center-block" />
          </div>
          <Carousel.Caption>
            <h3>{img.name}</h3>
            <p>{img.alt}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}
CarouselCompo.propTypes = {
  project: PropTypes.array.isRequired,
};
