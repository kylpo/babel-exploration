import React from 'react';
import { css } from 'linaria';
const COMPOSE_ME = "c1ywxa7t";
const COMPOSE_ME_TOO = "crfpk21";

var _ref = <div />;

const CompositeFunctionComponent = () => _ref;

class CompositeClassComponent extends React.Component {
  render() {
    return <div something={this.context.yep} />;
  }

}

var _ref2 = <nav className={"nb1nppg"} />;

var _ref3 = <div className={"d4vyljc"} />;

var _ref4 = <div className={"d1tgdjja"}>
          <div className={"d1izk7zw"} />
          <div className={"dshlvcw"} />
          <div className={"d10qko8x"} />
        </div>;

var _ref5 = <div className={"d1rlirz7"} />;

var _ref6 = <span className={"s1q06s0"}>
          Home
        </span>;

var _ref7 = <div className={"d14b3da4"} />;

var _ref8 = <div className='will be transformed to constant' />;

var _ref9 = <div className={`will not be transformed to constant`} />;

var _ref10 = <div className='some-class-name' />;

var _ref11 = <div />;

var _ref12 = <div className='will it be transformed to constant?'>
          <CompositeFunctionComponent something />
        </div>;

var _ref13 = <CompositeClassComponent somethingElse />;

export default class Home extends React.Component {
  handleClick() {}

  render() {
    const grow = 1;
    const spreadBreaksInlineAndConstant = {};
    return <div className={"dp4dx06"}>
        {_ref2}

        {_ref3}

        {_ref4}

        {_ref5}

        {_ref6}

        {_ref7}

        <span onClick={this.handleClick} className={"s14ofj0y"}>
          Open Fade Overlay
        </span>

        {_ref8}
        {_ref9}
        <div className={this.state.isUpdated} />
        <div className={grow} />

        {_ref10}

        {_ref11}

        <div ref={() => console.log('This messes up constant and inline')} />

        <div className='will it be transformed to constant?'>
          <div {...spreadBreaksInlineAndConstant} />
        </div>

        {_ref12}

        {_ref13}

      </div>;
  }

}
