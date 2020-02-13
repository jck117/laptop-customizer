import React from 'react';
import './CartItems.css';
import {USCurrencyFormat} from '../App'


class CartItems extends React.Component {
    render(){
        const {featureHash, feature, selectedOption} = this.props;
        return (
            <div className="summary__option" key={featureHash}>
                <div className="summary__option__label">{feature} </div>
                <div className="summary__option__value">{selectedOption.name}</div>
                <div className="summary__option__cost">
                    {USCurrencyFormat.format(selectedOption.cost)}
                </div>
            </div>
        );
    }
}

export default CartItems;

