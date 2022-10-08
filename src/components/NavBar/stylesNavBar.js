/***  stylesNavBar.js ***/
/* Project: Photography Portfolio for KW Studios 
   Descript: Showcase of fine art and commercial photography
   Created: Kendra Wainscott  2022

   Styles for NavBar Component
   Organized by major section, then alphabetically
*/
const logo = {
  maxWidth: "5rem",
  filter: "opacity(.3)",
};
const navContainer = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};
const navLink = {
  margin: "1rem",
  fontSize: "2rem",
};
const ul = {
  display: "flex",
  justifyContent: "space-between",
};

export const navBarStyles = {
  logo: logo,
  navContainer: navContainer,
  navLink: navLink,
  ul: ul,
};
