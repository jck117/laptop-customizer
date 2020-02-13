import React from 'react';
// Normalizes string as a slug - a string that is safe to use
// in both URLs and html attributes
import slugify from 'slugify';
import './Part.css';
import {USCurrencyFormat} from '../App'


class Part extends React.Component {
    render(){
        const {feature, selected, item} = this.props;
        const itemHash = slugify(JSON.stringify(item));  
        return (
            <div key={itemHash} className="feature__item">
                <input
                    type="radio"
                    id={itemHash}
                    className="feature__option"
                    name={slugify(feature)}
                    checked={item.name === selected[feature].name}
                    onChange={() => this.props.handleChange(feature, item)}
                />
                <label htmlFor={itemHash} className="feature__label">
                    {item.name} ({USCurrencyFormat.format(item.cost)}) 
                </label>
            </div>
        );
    }
}


export default Part;

/* onChange={() => this.props.handleChange(feature, item)} */

/*

onChange = {(e) => {
    console.log(feature)
    console.log(item)
}}

*/