import React       from 'react';
import { connect } from 'react-redux';

import { add_gift, remove_gift } from 'Xmas/Store/Actions';

import { Link } from 'react-router';

class Giftee extends React.Component {

    constructor(opts) {
        super(opts);
        this.state = { new_gift: '' };
    }

    handleSubmit(e) {
        this.props.add_gift( this.props.params.giftee, this.state.new_gift, this.state.new_value );
        this.setState({ new_gift: '', new_value: 0 });
        e.preventDefault();
    }

    fairShare() {
        let fair_share = this.props.budget.available / ( this.props.giftees.length || 1 );
        let sum = this.props.gifts.map( g => g.price ).reduce( (a,b) => a + b, 0 );

        return sum - fair_share;
    }

    render() {

        return <div>
            <h2>{ this.props.params.giftee }</h2>

            <div><Link to="/">Go back</Link></div>

            <div>Money left: { this.props.budget.left }</div>

            <div> { this.fairShare() > 0 ? 'over budget' : 'under budget' }</div>

            <ul>
                <li>
                    <form onSubmit={this.handleSubmit.bind(this)}>

                        <input 
                            placeholder="Thingy"
                            value={ this.state.new_gift }
                            onChange={ e => this.setState({ new_gift: e.target.value }) }/>

                        <input 
                            placeholder="price"
                            value={ this.state.new_value }
                            onChange={ e => this.setState({ new_value: e.target.value }) }/>

                        <input type="submit" value="submit" />

                    </form>
                </li>

                { this.props.gifts.map( g => 
                        <li> { g.label } - ${ g.price }
                            <input type="button" value="remove"
                                onClick={ e => this.props.remove_gift( this.props.params.giftee, g.label, g.price ) } />
                        </li> 
                ) }   
        </ul>
</div> }
};

export default connect( 
    ( state, ownProps ) => ({ 
        giftees: state.giftees,
        gifts: state.giftees.find( g => g.name === ownProps.params.giftee ).gifts,
        budget: state.budget
    }), 
    { add_gift, remove_gift })( 
    Giftee 
);
