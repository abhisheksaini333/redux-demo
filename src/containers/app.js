import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../actions';
import PropTypes from "prop-types";
import DisplayItems from '../component/displayItems';

class App extends Component {

    componentDidMount() {
        debugger
        this.props.getFoodItems();
    }

    render() {
        return (
            <>
                <h1>Hi</h1>
                <DisplayItems list={this.props.finalState}></DisplayItems>
            </>
        )
    }

    
}

App.propTypes = {
    getFoodItems: PropTypes.func.isRequired
}

const mapStateToProps = (state) => {
    return (
        {
            finalState: state.food,
        }
    )
}

export default connect(mapStateToProps, actions)(App);
