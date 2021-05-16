import React from "react";
import Header from "./Header";
import Order from "./Order";
import Inventory from "./Inventory";
import sampleFishes from "../sample-fishes";
import Fish from "./Fish";

// App.js is our Parent Componant and the menu for the Catch-Of-The-Day application
class App extends React.Component {
    // methods of the state and the state needs to be in the same component
    state = {
        fishes: {},
        order: {}
    };
    addFish = fish => { // how to update a piece of state
        // 1. Take a copy of existing state
        const fishes = { ...this.state.fishes }; // copy
        // 2. add our new fish to that fishes variable
        fishes[`fish${Date.now()}`] = fish;
        // 3. Set the new fishes object to state
        this.setState({ fishes })
    };
    loadSampleFishes = () => {
        this.setState({ fishes: sampleFishes });
    };

    addToOrder = key => {
        // 1. take a copy of state
        const order = { ...this.state.order };
        // 2. Either add to order, or update in our order
        order[key] = order[key] + 1 || 1;
        // 3. Call setState to update our state object
        this.setState({ order });
    };

    render() {
        return (
            <div className="catch-of-the-day">
                <div className="menu">
                    <Header tagline="Fresh Seafood Market" />
                    <ul className="fishes">
                        {Object.keys(this.state.fishes).map(key => (
                            <Fish
                                key={key}
                                index={key}
                                details={this.state.fishes[key]}
                                addToOrder={this.addToOrder}
                            />
                        ))}
                        {/*Turn the fish input into an array which each will show the fish emoji, key (specific to react) will give each a unique identifier  */}
                    </ul>
                </div>
                <Order fishes={this.state.fishes} order={this.state.order} />
                <Inventory addFish={this.addFish} loadSampleFishes={this.loadSampleFishes} />
            </div>
        );
    }

}

export default App;