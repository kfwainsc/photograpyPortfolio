/*** NAVBAR <NavBar /> ***/
/* Project: Photography Portfolio for KW Studios 
   Descript: Showcase of fine art commercial photography
   Created: Kendra Wainscott  2022
*/
import React from "react";
import {NavLink} from "react-router-dom";
import {projectOverviews} from "../../contentLists/projectOverviews";
import {navBarStyles as styles} from "./stylesNavBar";
import NavDropdown from "react-bootstrap/NavDropdown";
const logo = require("./tempLogo.jpg");

export function NavBar() {
  return (
    <div style={styles.navContainer}>
      <img src={logo} alt="kw studios logo" style={styles.logo} />
      <ul style={styles.ul}>
        <NavDropdown title="About" id="basic-nav-dropdown" style={styles.navLink}>
          <NavLink to="/" key="about" style={styles.navLink} className={"nav-link"}>
            About Me
          </NavLink>
          <NavLink to="/" key="contact" style={styles.navLink} className={"nav-link"}>
            Contact
          </NavLink>
        </NavDropdown>
        <NavDropdown title="Projects" id="basic-nav-dropdown" style={styles.navLink}>
          {projectOverviews.map((project) => (
            <NavDropdown.Item key={project.title}>
              <NavLink to={project.path} style={styles.navLink} className={"nav-link"}>
                {project.title}
              </NavLink>
            </NavDropdown.Item>
          ))}
        </NavDropdown>
      </ul>
    </div>
  );
}
