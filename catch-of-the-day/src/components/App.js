import React from "react";
import PropTypes from "prop-types";
import Header from "./Header";
import Order from "./Order";
import Inventory from "./Inventory";
import sampleFishes from "../sample-fishes";
import Fish from "./Fish";
import base from "../base";

// App.js is our Parent Componant and the menu for the Catch-Of-The-Day application
class App extends React.Component {
    // methods of the state and the state needs to be in the same component
    state = {
        fishes: {},
        order: {}
    };

    static propTypes = { 
        match: PropTypes.object.isRequired,
    }

    componentDidMount() {
        const { params } = this.props.match;
        // first reinstate our localStorage
        const localStorageRef = localStorage.getItem(params.storeId);
        if(localStorageRef) {
            this.setState({order: JSON.parse(localStorageRef) })
        }
        this.ref = base.syncState(`${params.storeId}/fishes`, {
            context: this,
            state: 'fishes',
        });      
    }
  
    componentDidUpdate() {
        console.log('this.state.order', this.state.order);
        localStorage.setItem(this.props.match.params.storeId, JSON.stringify(this.state.order));
        console.log('It updated!!!!');
    }

    componentWillUnmount() {
        base.removeBinding(this.ref); // when user leaves this.remove will be unbound. Avoids memory issue
    }

    addFish = fish => { // how to update a piece of state
        // 1. Take a copy of existing state
        const fishes = { ...this.state.fishes }; // copy
        // 2. add our new fish to that fishes variable
        fishes[`fish${Date.now()}`] = fish;
        // 3. Set the new fishes object to state
        this.setState({ fishes })
    };

    updateFish = (key, updatedFish) => {
        // 1. Take a copy of the current state
        const fishes = { ...this.state.fishes };
        // 2. Update that state
        fishes[key] = null; // you need to set the fish to null so it will show on fiirebase
        // 3. Set that to state
        this.setState({ fishes }); // set the new array without the deleted fish
    };

    deleteFish = (key) => {
        // 1. Take a copy of state
        const fishes = { ...this.state.fishes }; 
        // 2. update that state 
        fishes[key] = null; // must set the fish to null
        // 3. update state
        this.setState({ fishes }); // gives state the updated array
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

    removeFromOrder = key => {
        // 1. take a copy of state
        const order = { ...this.state.order };
        // 2. Remove from order
        delete order[key];
        // 3. Call setState to update our state object
        this.setState({ order });
    }

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
                <Order fishes={this.state.fishes} order={this.state.order} removeFromOrder={this.removeFromOrder} />
                <Inventory 
                addFish={this.addFish} 
                updateFish={this.updateFish}
                deleteFish={this.deleteFish}
                loadSampleFishes={this.loadSampleFishes}
                fishes={this.state.fishes}
                storeId={this.props.match.params.storeId}
                />

            </div>
        );
    }

}

export default App;