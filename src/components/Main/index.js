import React, { Component } from "react";
// import {Link} from "react-router-dom"
// import {styled} from "styled-components";

import Header from "../Header";
import Footer from "../Footer";

const Main = props => (
  <div>
    <Header />
    <main>{props.children}</main>
    <Footer />
  </div>
);

// class Main extends Component {
//     constructor(props){
//         super(props)
//     }
//     render() {
//         return (
//             <div>
//             <Header />
//             <main>{this.props.children}</main>
//             <Footer />
//             </div>
//     );
//   }
// }

export default Main;
