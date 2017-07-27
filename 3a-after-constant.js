import './1-after-constelation.emotion.css';
import React from 'react';
import { css } from 'emotion';

var _ref = <div />;

const CompositeFunctionComponent = () => _ref;

class CompositeClassComponent extends React.Component {

  render() {
    return <div something={this.context.yep} />;
  }
}

var _ref2 = <div className="will be transformed to constant" />;

var _ref3 = <CompositeFunctionComponent something />;

var _ref4 = <CompositeClassComponent somethingElse />;

export default class Home extends React.Component {
  handleClick() {}

  render() {
    const grow = 1;
    const spreadBreaksInlineAndConstant = {};

    return <div className={css(['css-1s18j1e'], [grow])}>
        <nav className={`${'css-kssq5x'}`} />

        <div className={`${'css-1ibztja'}`} />

        <div className={css(['css-ypm15r'], [this.state.isUpdated ? 'column' : 'row'])}>
          <div className={`${'css-10n0dl7'}`} />
          <div className={`${'css-asuv6'}`} />
          <div className={`${'css-cb9ahb'}`} />
        </div>

        <span className={`${'css-18gaxx6'}`}>
          Home
        </span>

        <span className={`${'css-15dla7k'}`} onClick={this.handleClick}>
          Open Fade Overlay
        </span>

        {_ref2}
        <div className={`will not be transformed to constant`} />
        <div className={this.state.isUpdated} />
        <div className={grow} />

        <div ref={() => console.log('This messes up constant and inline')} />

        <div {...spreadBreaksInlineAndConstant} />

        {_ref3}
        {_ref4}

      </div>;
  }
}
