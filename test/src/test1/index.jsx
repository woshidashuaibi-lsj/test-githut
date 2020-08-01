import React, { Component } from 'react';

class A extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 1
          }
    }
    render() { 
        return ( <div>
            {this.state.count}
        </div> );
    }
}
 
export default A;