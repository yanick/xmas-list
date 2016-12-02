import React     from 'react';
import { connect} from 'react-redux';

import { set_budget } from 'Xmas/Store';

class Budget extends React.Component {

    render() {
        return <div>
            <label>Overall budget: 
                <input type="number" onChange={ e => this.props.set_budget( parseInt(e.target.value) ) }
                    value={ this.props.budget.available }/>
            </label>
        </div>
    }
}

export default connect(
    null,
    { set_budget }    
)( Budget );
