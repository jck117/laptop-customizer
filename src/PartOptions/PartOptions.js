import React from 'react';
import Part from '../Part/Part';
import './PartOptions.css';

class PartOptions extends React.Component {

    render(){
        const {features, feature, selected, idx} = this.props;
        const featureHash = feature + '-' + idx; //=> e.g. Processor-0
        const options = features[feature].map((item, index) =>  //e.g. feature=Processor, item = {name: '17th Generation...', cost: 700}    
            <Part 
                item={item} 
                feature={feature} 
                selected={selected}
                handleChange={this.props.handleChange}
                key={index}                
                />
        );    
    
        return (
            <fieldset className="feature" key={featureHash}>
                <legend className="feature__name">
                    <h3>{feature}</h3>
                </legend>
                {options}
            </fieldset>
        )
    }
       
}



export default PartOptions;