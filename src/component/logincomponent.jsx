import React, { Component } from 'react';
import

class logincomponent extends Component {
    constructor(props){
        super(props);
        this.state={}
    }
    render() {
        return (
            <div className="card col-md-4 mx-auto mt-4">
                <h5 >login</h5>
            </div>
            <div className="form-group">
                <label htmlFor="email">email</label>
                <input type="password" id="password" className="form-control" aria-required></input>
            </div>

        );
    }
}

export default logincomponent;
