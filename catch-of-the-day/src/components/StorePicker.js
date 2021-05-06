import React from 'react';

class StorePicker extends React.Component { 
    // classes in React should start with a capital letter and always should have a method
    render() { // method put inside of a componant
        // in jsx use className instead of class
        return ( 
            // you can only return one parent element(not sibling element), you can use react fragment to put siblings inside
            <React.Fragment> 
                <form className="store-selector">
                    {/* This is how you comment in jsx. You can't put a comment in parent with a sibling. You must nest inside of the child element */} 
                    <h2>Please Enter A Store</h2>
                    <input type="text" required placeholder="Store Name" />
                    <button type="submit">Visit Store</button>
                </form> 
            </React.Fragment>
        ) // Parentheses will run first
    }
} 

export default StorePicker;