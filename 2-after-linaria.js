import React from 'react';
import { css, styled } from 'linaria';
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
export default class Home extends React.Component {
  handleClick() {}

  render() {
    const grow = 1;
    const spreadBreaksInlineAndConstant = {};
    return <div className={"dp4dx06"}>

      <StyledH1 color="#333" />

      <StyledH1 color={this.props.color} />

        <nav className={"nb1nppg"} />

        <div className={"d4vyljc"} />

        <div className={"d1tgdjja"}>
          <div className={"d1izk7zw"} />
          <div className={"dshlvcw"} />
          <div className={"d10qko8x"} />
        </div>

        <div className={"d1rlirz7"} />

        <span className={"s1q06s0"}>
          Home
        </span>

        <div className={"d14b3da4"} />

        <span onClick={this.handleClick} className={"s14ofj0y"}>
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
