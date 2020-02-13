import React from 'react';
import PartOptions from '../PartOptions/PartOptions';

class Customization extends React.Component {
    render(){
        const features = Object.keys(this.props.features).map((feature, idx) => 
            <PartOptions 
                features={this.props.features} 
                feature={feature} 
                selected={this.props.selected} 
                idx={idx}
                key={idx}
                handleChange={this.props.handleChange}
                />
        )

        return(
            <form className="main__form">
                <h2>Customize your laptop</h2>
                {features}
            </form>
        )
    }
        
}



export default Customization;