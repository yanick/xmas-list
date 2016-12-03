import React     from 'react';
import { connect} from 'react-redux';

import { set_budget } from 'Xmas/Store/Actions';

const Budget = props => <div>
            <label>Overall budget: 
                <input type="number" onChange={ e => props.set_budget( parseInt(e.target.value) ) }
                    value={ props.budget.available }/>
            </label>
            <div> Money left: {props.budget.left } </div>
        </div>

export default connect( null, { set_budget } )( Budget );
