import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Navigation = styled.ul`
  text-decoration: none;
  li {
    font-family: "Dosis", sans-serif;
    font-size: 25px;
    font-weight: 600;
    display: inline-block;
    margin: 30px;
    color: #ffffff;
  }
  .last {
    float: right;
    margin: 30px 60px 30px 30px;
  }

`;

const Navbar = styled.div`
  background: #7ed3b2;
`;

const linkStyle = {
  textDecoration:"none",
  color:"#ffffff",
}

class Header extends Component {
  render() {
    return (
      <Navbar>
        <Navigation>
          <li>
            <Link style={linkStyle} to="/">Home</Link>
          </li>
          <li>
            <Link style={linkStyle} to="/News">News</Link>
          </li>
          <li className="last">
            <Link style={linkStyle} to="/About">About</Link>
          </li>
        </Navigation>
      </Navbar>
    );
  }
}

export default Header;
