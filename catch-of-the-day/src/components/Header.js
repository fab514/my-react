import React from "react";

const Header = props => ( // Stateless Function with a implicit return
    <header className="top">
        <h1>
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

export default Header;