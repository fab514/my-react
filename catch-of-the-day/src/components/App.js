import React from "react";
import Header from "./Header";
import Order from "./Order";
import Inventory from "./Inventory";
import sampleFishes from "../sample-fishes";

class App extends React.Component {
    // methods of the state and the state needs to be in the same component
    state = {
        fishes: {},
        order: {}
    };
    addFish = fish => { // how to update a piece of state
        // 1. Take a copy of existing state
        const fishes = {...this.state.fishes }; // copy
        // 2. add our new fish to that fishes variable
        fishes[`fish${Date.now()}`] = fish;
        // 3. Set the new fishes object to state
        this.setState({ fishes })
    };
    loadSampleFishes = () => {
        this.setState({ fishes: sampleFishes });
    };

    render() {
        return(
            <div className="catch-of-the-day">
                <div className="menu">
                    <Header tagline="Fresh Seafood Market" />
                </div>
                <Order />
                <Inventory addFish={this.addFish} loadSampleFishes={this.loadSampleFishes} />
            </div>
        );
    }

}

export default App;