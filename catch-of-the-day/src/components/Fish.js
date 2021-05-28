import React from "react";
import { formatPrice } from "../helpers";
import PropTypes from "prop-types";

// static keeps all of the fish a constant prop-type. With every single instance, even with new fish added. 
// PropTypes.shape will check if all of the properties in the object are those types. 
class Fish extends React.Component {
    static propTypes = {
        details: PropTypes.shape({
            image: PropTypes.string.isRequired, 
            name: PropTypes.string.isRequired,
            desc: PropTypes.string.isRequired,
            status: PropTypes.string.isRequired,
            price: PropTypes.number.isRequired, 
        }),
        addToOrder: PropTypes.func.isRequired,
    }
    render() {
        const { image, name, price, desc, status} = this.props.details;
        const isAvailable = status === "available"; // boolean shows the fish is available or not
        return (
            <li className="menu-fish">
                <img src={image} alt={name} />
                <h3 className="fish-name">
                    {name}
                    <span className="price">{formatPrice(price)}</span>
                </h3>
                <p>{desc}</p>
                <button disabled={!isAvailable} onClick={() => this.props.addToOrder(this.props.index)}>
                    {isAvailable ? 'Add To Order' : 'Sold Out!'}</button>
            </li>
        );
    }

}

export default Fish;

{/* 🐡 */}