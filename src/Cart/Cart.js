import React from 'react';
import CartItems from '../CartItems/CartItems';
import Total from '../Total/Total';

class Cart extends React.Component {
  
    render(){
        const {selected} = this.props;
        const summary = Object.keys(selected).map((feature, idx) => {
            const featureHash = feature + '-' + idx; //=> e.g. Processor-0
            const selectedOption = selected[feature]; //=> e.g. state.selected['Processor']
                return (
                    <CartItems 
                        featureHash={featureHash}
                        selectedOption={selectedOption}
                        feature={feature}
                        key={idx}
                    />
                )
        });  

        return(
            <section className="main__summary">
                <h2>Your cart</h2>
                {summary}
                <Total selected={selected}/>
            </section>
        );
    }
}



export default Cart;
