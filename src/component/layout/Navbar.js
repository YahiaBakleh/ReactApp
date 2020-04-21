import React from "react";
import PropTypes from "prop-types";

//if uncomment one of line 5 or 6 comment 7 and 8
//const Navbar =({dotClass , icon , title})=> {
//const Navbar =(dotClass , icon , title)=> {
const Navbar =(props)=> {
  const {dotClass , icon , title}=props;
  // console.log("{Title} :"+{title});
  // console.log("Title :"+title);

    return (
      <nav className={dotClass}>
        <h1>
          <i className={icon} />
          {title}
        </h1>
      </nav>
    );
}

Navbar.defaultProps = {
  dotClass: "navbar bg-primary",
  icon: "fa fa-github",
  title: "GitHub Finder",
};
Navbar.propTypes = {
  dotClass: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};

export default Navbar;
