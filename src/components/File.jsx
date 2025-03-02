import React, { Component } from 'react';
import './File.css';
import Logic from './Logic';


class MainMain extends Component {

    constructor(props){
        super(props);
        this.state = {
            count: 0,
            device: 0
        };

    }

    render() {
        function useState(i_count){
            return {count: i_count + 1};
        }

        function fn(i_count){
            return {device: i_count + 1};
        }
        return <div className='main'>
            <Logic /><Logic />
            <div>MainMain</div>
            <button onClick={()=>this.setState(useState(this.state.count))}>Header</button>
            <div>count={this.state.count}</div>
            <button onClick={()=>this.setState(fn(this.state.device))}>Header</button>
            <div>device={this.state.device}</div>
        </div>;
    }

    componentDidMount() {
        console.log('componentDidMount');
    }

    componentWillUnmount() {
        console.log('componentWillUnmount');
    }

    componentDidUpdate() {
        console.log('componentDidUpdate');
    }
}

export default MainMain;