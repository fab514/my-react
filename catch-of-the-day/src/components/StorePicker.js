import React from "react";
import PropTypes from "prop-types";
import { getFunName } from "../helpers";

// StorePicker is a componant for the store name creator. 

class StorePicker extends React.Component {
    myInput = React.createRef();
    // Use ref in react allows us to reference dom nodes on the page, ref called at line 26
    static propTypes = {
        history: PropTypes.object.isRequired,
    }
    goToStore = event => {
        // 1. Stop the form from submitting
        event.preventDefault(); 
        // 2. Get the text from the input 
        const storeName = this.myInput.current.value;
        // 3. Change the page to /store/whatever-they-entered
        this.props.history.push(`/store/${storeName}`);
    };

    render() { // method put inside of a componant
        return (
            <form className="store-selector" onSubmit={this.goToStore}>
                {/* This is how you comment in jsx. You can't put a comment in parent with a sibling. You must nest inside of the child element */}
                <h2>Please Enter A Store</h2>
                <input 
                    type="text" 
                    ref={this.myInput}
                    required placeholder="Store Name" 
                    defaultValue={getFunName()} 
                />
                <button type="submit">Visit Store</button>
            </form>

        ); // Inside parentheses will run first
    }
}

export default StorePicker;