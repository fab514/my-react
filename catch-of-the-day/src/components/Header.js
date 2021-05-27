import React from "react";
import PropTypes from "prop-types" // Prop Types is a type checker

// The Header.js is a compnant that layouts the header of the menu
const Header = props => ( // Stateless Function with a implicit return
    <header className="top">
        <h1>
            {/* Span used so the header can have access to css (around the anchor) */}
            Catch 
            <span className="ofThe"> 
                <span className="of">Of</span> 
                <span className="the">The</span>  
            </span>
            Day
        </h1>
        <h3 className="tagline">
            <span>{props.tagline}</span> 
            {/* props is called from the function paramenter header */}
        </h3>
    </header>
);

// PropTypes will enforce the property is the correct type.  
Header.propTypes = {
    tagline: PropTypes.string.isRequired
}

export default Header;