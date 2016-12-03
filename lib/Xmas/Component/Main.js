import React     from 'react';
import { connect} from 'react-redux';

import ListOfPeeps from './ListOfPeeps';
import Budget from './Budget';

class Main extends React.Component {

    constructor(opts) { 
        super(opts);
    }
    
    render() {
        return <div>
    <h1>Xmas list</h1>

    <Budget { ...this.props } />

    { this.props.giftees.length > 0 && <div><label>budget per person: ${ 
            parseInt( this.props.budget.available / this.props.giftees.length )
                                            }</label></div> }

    <ListOfPeeps { ...this.props } />

</div> }
};

export default connect(
    state => ({ giftees: state.giftees, budget: state.budget })
)( Main );
