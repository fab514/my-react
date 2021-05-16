# React
## Componant
- A componant is a reusable piece of your website as along as use event and attach data
- Componant is similar to an object from JS.
- Similar to an attribute in HTML and Javaspcript, a Prop gives data to a componant.
- component should have a self closing tags <App />
- Whever data changes, componantes will show react where to update itself. 

## Render 
- What Dom objects that will show on the page.

## Odds and Ends
- If you need to pass anything besides a string you need to use curly brackets. {500}, {true}
- Use {curly brackets} to reference javascript variables.
- When You choose a componant in react tools (on browser) it will show a $r. When typing the $r inside of our console it will show all the instances on the componant. 


## Props
- Props are a way to get information into a componant. (similar to an attribute in js and html)
- This will let us access a specific componant. 
- below Tagline is a prop that will show in React tools. 

```js 
// reminder: curly brackets temporarily accesses Javascript
<h3 className="tagline">
    <span>{this.props.tagline}</span> 
</h3>

```
- {this.props.tagline} 
- <u>this</u> is a componant instance, whatever got passed in when it was used. 
- <u>.props</u> is an object inside of a componant that contains all our assigned properties. 
- <u>.tagline</u> is the attribute being called. 

## Stateless Function
- If your componant is simply a render method and prop types we can make it into a stateless function
```js
// Stateless inline Function with a implicit return (return whatever is in the paranthesis)
const Header = props => ( 
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
        </h3>
    </header>
);
```



## State
- State is where the data lives, props gives a definition where the data should be displayed.




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

```
## State 
- an object that lives inside of a componant that stores the data that itself and it's children needs. 
- Don't touch the dom
- updating the data and letting react to take it. 
- In react you store your data in state. When you updates the state react will update all of the variables that you put that data.
- You have one parent state and it is passed to the children.
### app componant
- data is going to live in app this way you can share to different componants. you can't pass data up, you have to pass data down
- Anything passed in the component is available inside the props object.
```js
<AddFishForm addFish={this.props.addFish} /> 
<button onClick={this.props.loadSampleFishes}>Load Sample Fishes</button>

```
## Simplifying componants
- If you feel like the code is getting to long you can shell out code. 
- Here is the original code..
```js
class Order extends React.Component {
    render() {
        const orderIds = Object.keys(this.props.order);
        const total = orderIds.reduce((prevTotal, key) => {
           const fish = this.props.fishes[key];
           const count = this.props.order[key];
           const isAvailable = fish && fish.status === 'available';
           if(isAvailable) {
               return prevTotal + (count * fish.price);
           }
           return prevTotal;
        }, 0); // take in data and return a tally 
        return (
            <div className="order-wrap">
                <h2>Order</h2>
                <ul>
                    {orderIds.map(key => <li>{key}</li>)}
                </ul>
                <div className="total">
                    Total:
                    <strong>{formatPrice(total)}</strong>
                </div>

            </div>
        );

    }
    class Order extends React.Component {
    renderOrder = (key) => {
        const fish = this.props.fishes[key];
        const count = this.props.order[key];
        const isAvailable = fish.status === 'available'
        if(!isAvailable) {
            return <li key={key}>Sorry {fish ? fish.name : 'fish'} is no longer available</li>
        }
        return <li>
            {count} lbs {fish.name}

            {formatPrice(count * fish.price)}
            </li>;
    }
    render() {
        const orderIds = Object.keys(this.props.order);
        const total = orderIds.reduce((prevTotal, key) => {
           const fish = this.props.fishes[key];
           const count = this.props.order[key];
           const isAvailable = fish && fish.status === 'available';
           if(isAvailable) {
               return prevTotal + (count * fish.price);
           }
           return prevTotal;
        }, 0); // take in data and return a tally 
        return (
            <div className="order-wrap">
                <h2>Order</h2>
                <ul className="order">{orderIds.map(this.renderOrder)}</ul>
                <div className="total">
                    Total:
                    <strong>{formatPrice(total)}</strong>
                </div>

            </div>
        );

    }

}
