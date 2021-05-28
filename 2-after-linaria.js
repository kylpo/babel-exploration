import React from 'react';
import { css, styled } from 'linaria';
import { resolve } from 'styled-jsx/css';
const COMPOSE_ME = "c1ywxa7t";
const COMPOSE_ME_TOO = "crfpk21";

const CompositeFunctionComponent = () => <div />;

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

export default class Home extends React.Component {
  handleClick() {}

  render() {
    const grow = 1;
    const spreadBreaksInlineAndConstant = {};
    return <div onMouseEnter={() => console.log("ENTER")} onMouseOver={() => console.log("OVER")} onMouseLeave={() => console.log("LEAVE")} className={"dp4dx06"} style={{
      flexGrow: grow
    }}>

      <StyledH1 color="#333" />

      <StyledH1 color={this.props.color} />

      <div className={"db1nppg"} />

      <div className={"d4vyljc"} style={{
        flexBasis: this.props.size
      }} />

        <div as='nav' className={"d1tgdjja"} />

        <div className={"d1izk7zw"} />

        <div className={"dshlvcw"}>
          <div className={"d10qko8x"} />
          <div className={"d1rlirz7"} />
          <div className={"d1q06s0"} />
        </div>

        <div className={"d14b3da4"} />

        <span className={"s14ofj0y"}>
          Home
        </span>

        <div className={"d1ryefa9"} />

        <span onClick={this.handleClick} className={"sjo4cu8"}>
          Open Fade Overlay
        </span>

        <div className='will be transformed to constant' />
        <div className={`will not be transformed to constant`} />
        <div className={this.state.isUpdated} />
        <div className={grow} />

        <div className='some-class-name' />

        <div />

        <div ref={() => console.log('This messes up constant and inline')} />

        <div className='will it be transformed to constant?'>
          <div {...spreadBreaksInlineAndConstant} />
        </div>

        <div className='will it be transformed to constant?'>
          <CompositeFunctionComponent something />
        </div>

        <CompositeClassComponent somethingElse />

      </div>;
  }

}
