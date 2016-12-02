import React     from 'react';
import { connect } from 'react-redux';

import { add_giftee, remove_giftee } from 'Xmas/Store';

class ListOfPeeps extends React.Component {

    static propTypes  = {
        giftees:       React.PropTypes.array.isRequired,
        add_giftee:    React.PropTypes.func.isRequired,
        remove_giftee: React.PropTypes.func.isRequired,
    };

    static defaultProps = {
        add_giftee:    console.log,
        remove_giftee: console.log,
    };

    constructor(opts) {
        super(opts);
        this.state = { new_giftee: '' };
    }

    handleSubmit(e) {
        this.props.add_giftee( this.state.new_giftee );
        this.setState({ new_giftee: '' });
        e.preventDefault();
    }

    render() {
        return <div>
    <h2>Peeps</h2>
    <ul>
        <li><form onSubmit={this.handleSubmit.bind(this)}>
            <input 
                value={ this.state.new_giftee }
                onChange={ e => this.setState({ new_giftee: e.target.value }) }/>
        </form></li>
        {
            this.props.giftees.map( g => 
                <li>{ g.name } 
                    <input type="button" value="remove"
                        onClick={ e => this.props.remove_giftee( g.name ) } />
                </li> 
            )
        }   
    </ul>
</div> }
};

export default connect(
        undefined,
        { add_giftee, remove_giftee }
)( ListOfPeeps );
