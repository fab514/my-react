import React from "react";
import { formatPrice } from "../helpers";

// Order.js is a componant used for the order section of application.
class Order extends React.Component {
    renderOrder = (key) => {
        const fish = this.props.fishes[key];
        const count = this.props.order[key];
        const isAvailable = fish && fish.status === 'available'
        // Make sure the fish is loaded before we continue!
        if(!fish) return null;
        
        if(!isAvailable) {
            return (
                <li key={key}>
                    Sorry {fish ? fish.name : 'fish'} is no longer available
                </li>
            );
        }
        return (
            <li key={key}>
                {count} lbs {fish.name}
                {formatPrice(count * fish.price)}
                <button onClick={() => this.props.removeFromOrder(key)}>&times;</button>
            </li>
        );
    }
    render() {
        const orderIds = Object.keys(this.props.order);
        // reduce can be used to tally up the fishes
        const total = orderIds.reduce((prevTotal, key) => {
           const fish = this.props.fishes[key];
           const count = this.props.order[key];
           // make sure there is a fish and it is available
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

export default Order;