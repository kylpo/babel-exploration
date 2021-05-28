import React from 'react';
import { css, styled } from 'linaria';
import { resolve } from 'styled-jsx/css';
const COMPOSE_ME = "c1ywxa7t";
const COMPOSE_ME_TOO = "crfpk21";

var _ref = <div />;

const CompositeFunctionComponent = () => _ref;

class CompositeClassComponent extends React.Component {
  render() {
    return <div something={this.context.yep} />;
  }

}

const StyledH1 = styled.h1`
background: 'red';
  font-family: ${families.serif};
  color: ${props => props.color};
`;
/* 
static style:

resolve`
  a { color: green }
`
*/

resolve`
  a { color: green }
`;
/* 
dynamic style:

resolve`
  color: ${color};
`
*/

color => resolve`
    color: ${color};
  `;
/*
static and dynamic:

resolve`
    color: ${color};
    background-color: red;
  `
*/


color => resolve`
    color: ${color};
    background-color: red;
  `;

var _ref2 = <StyledH1 color="#333" />;

var _ref3 = <div className={"db1nppg"} />;

var _ref4 = <div as='nav' className={"d1tgdjja"} />;

var _ref5 = <div className={"d1izk7zw"} />;

var _ref6 = <div className={"dshlvcw"}>
          <div className={"d10qko8x"} />
          <div className={"d1rlirz7"} />
          <div className={"d1q06s0"} />
        </div>;

var _ref7 = <div className={"d14b3da4"} />;

var _ref8 = <span className={"s14ofj0y"}>
          Home
        </span>;

var _ref9 = <div className={"d1ryefa9"} />;

var _ref10 = <div className='will be transformed to constant' />;

var _ref11 = <div className={`will not be transformed to constant`} />;

var _ref12 = <div className='some-class-name' />;

var _ref13 = <div />;

var _ref14 = <div className='will it be transformed to constant?'>
          <CompositeFunctionComponent something />
        </div>;

var _ref15 = <CompositeClassComponent somethingElse />;

export default class Home extends React.Component {
  handleClick() {}

  render() {
    const grow = 1;
    const spreadBreaksInlineAndConstant = {};
    return <div onMouseEnter={() => console.log("ENTER")} onMouseOver={() => console.log("OVER")} onMouseLeave={() => console.log("LEAVE")} className={"dp4dx06"} style={{
      flexGrow: grow
    }}>

      {_ref2}

      <StyledH1 color={this.props.color} />

      {_ref3}

      <div className={"d4vyljc"} style={{
        flexBasis: this.props.size
      }} />

        {_ref4}

        {_ref5}

        {_ref6}

        {_ref7}

        {_ref8}

        {_ref9}

        <span onClick={this.handleClick} className={"sjo4cu8"}>
          Open Fade Overlay
        </span>

        {_ref10}
        {_ref11}
        <div className={this.state.isUpdated} />
        <div className={grow} />

        {_ref12}

        {_ref13}

        <div ref={() => console.log('This messes up constant and inline')} />

        <div className='will it be transformed to constant?'>
          <div {...spreadBreaksInlineAndConstant} />
        </div>

        {_ref14}

        {_ref15}

      </div>;
  }

}
