// import React, { Component } from 'react'

// export default class App extends Component {
//     constructor(props){
//         super(props);
//         this.state={
//           username:"",
//           password:"",
//           email:"",
//         };
//     }


//     render() {
//         return (
//             <section>
//                 <article>
//                     <div className="form-group">
//                         <label for="user">username</label>
//                         <input tytpe="text" placeholder="enter  username" id="user" className="form-control"></input>

//                     </div>

//                      <div className="form-group">
//                         <label for="email">email</label>
//                         <input tytpe="email" placeholder="enter  email" id="email" className="form-control"></input>

//                     </div>
//                      <div className="form-group">
//                         <label for="">username</label>
//                         <input tytpe="text" placeholder="enter  username" id="user" className="form-control"></input>

//                     </div>

//                     <div>
//                         <div className="btn btn-primary">
//                             <button>login</button>
//                         </div>
//                     </div>

                    
//                 </article>
//             </section>
            
//         )
    
// }}

import react, {Component, Fragment } from "react";
import logincomponent from  './component/logincomponent';
class  App extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <Fragment>
                <logincomponent/>

            </Fragment>

         );
    }
}
 
export default App ;
