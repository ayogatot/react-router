import React, { Component } from "react";
import styled from "styled-components";

const BottomFooter = styled.footer`
  font-family: "Dosis", sans-serif;
  color: #393e46;
  display: flex;
  justify-content: center;
`;

class Footer extends Component {
  render() {
    return <BottomFooter>Copyright &copy; ayogatot 2019</BottomFooter>;
  }
}

export default Footer;
