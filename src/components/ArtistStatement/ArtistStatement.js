/***  ARTISTSTATEMENT.js    <ArtistStatement {placement} {btnTxt} {statement} />
/* Project: Photography Portfolio for KW Studios 
   Descript: Showcase of fine art and commercial photography
   Created: Kendra Wainscott  2022
*/
import React, {useState} from "react";
import PropTypes from "prop-types";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import {artistStatementStyles as styles} from "./stylesArtistStatement";

export function ArtistStatement({btnTxt, statement, ...props}) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [isHovering, setIsHovering] = useState(false);
  const handleMouseOver = () => {
    setIsHovering(true);
  };
  const handleMouseOut = () => {
    setIsHovering(false);
  };
  return (
    <div>
      <Button
        variant="primary"
        onClick={handleShow}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
        style={isHovering ? styles.btnHover : styles.btn}
      >
        {btnTxt}
      </Button>

      <Offcanvas
        show={show}
        onHide={handleClose}
        scroll={true}
        backdrop={false}
        {...props}
        className="h-auto"
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Artist Statement</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          {statement.map((p, index) => (
            <p key={index}>{p}</p>
          ))}
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
}
ArtistStatement.propTypes = {
  placement: PropTypes.string.isRequired,
  btnTxt: PropTypes.string.isRequired,
  statement: PropTypes.array.isRequired,
};
