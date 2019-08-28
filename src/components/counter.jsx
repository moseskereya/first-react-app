import React, { Component } from 'react';
import { log } from 'util';
  
class Counter extends Component {
    state = {
        count: 0,
        reset: -1,
    };

    handleIncrement =  () =>{
       this.setState({count : this.state.count + 1})
     
    }
    handleDecrement = () =>{
        this.setState({count : this.state.count = 0})
    }
    render() { 
        return (
            <div> 
                <span className="burge">{this.formatcount()}
                </span>
              <button onClick={this.handleIncrement} className="button">Increment</button>
              <button className="reset" onClick={this.handleDecrement}>reset</button>
            </div>
        );
    }
    formatcount (){
        const { count} = this.state;
        return count === 0 ? 'Zero' : count 
    }
}
 
export default Counter;