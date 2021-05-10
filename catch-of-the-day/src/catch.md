- Similar to an attribute in HTML and Javaspcript, a Prop gives data to a componant.
- component should have a self closing tags <App />
- State is where the data lives, props gives a definition where the data should be displayed.
- If you need to pass anything besides a string you need to use curly brackets. {500}, {true}
- Use {curly brackets} to reference javascript variables.

- {this.props.tagline} 
- <u>this</u> is a componant instance, whatever got passed in when it was used. 
- <u>.props</u> is an object inside of a componant that contains all our assigned properties. 
- <u>.tagline</u> is the attribute being called. 

- When You choose a componant in react tools (on browser) it will show a $r. When typing the $r inside of our console it will show all the instances on the componant. 
- Componant is similar to an object from JS.
- If your componant is simply a render method and prop types we can make it into a stateless function

## Classes
- in jsx use className instead of class, classes in React should start with a capital letter and always should have a method

## Returns
- you can only return one parent element(not sibling element), you can use react fragment to put siblings inside

## Switch Tag
- Switch Tag checks out Routes. If 1 route does not work it will switch to the next until it a route returns true.

## Synthetic Event
- An event that can cross browsers.

## this statement
- this is always equal to the componant React.componant
- binding in React. There are built in methods on the react componant. Such as render(), componantDidMount() will run once the componant has been mounted to the dom. 
- All built in methods are children to the React.componant. 
- If we make our own this will return as undefined. We will have a hard time referencing our own componant
- Solution for referencing is to bind our componant

```js

// Inside of a componant
constructor() { // A constructor is one way to bind 
        super(); // super will run the componant we are extending first
        this.goToStore = this.goToStore.bind(this); // overwrite the method on it and attach to bind. 
    }

    // second method to bind a custom instance.

    myInput = React.createRef();
    
    // goToStore is a property on the componant setting it to an arrow function allow us to bind to the StorePicker componant
    goToStore = (event) => {
        // 1. Stop the form from submitting
        event.preventDefault(); 
        // 2. Get the text from the input 
        const storeName = this.myInput.value.value;
        // 3. Chage the page to /store/whatever-they-entered
        this.props.history.push(`/store/${storeName}`);
        
        // myInput is the object .value is a react thing reaching for the value(input) on the object. The 2nd value gets whatever has been typed 

        console.log("Going to Store");
    }