// Core
import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import { connect } from "react-redux";

import Scheduler from "./../../components/Scheduler";

// Components
const mapStateToProps = (state) => {
    return {
        state,
    };
};

@hot(module)
@connect(mapStateToProps)
export default class App extends Component {
    render () {
        return (
            <Scheduler />
        );
    }
}
