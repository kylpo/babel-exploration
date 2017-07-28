import './1-after-constelation.emotion.css';
import React from 'react';
import { css } from 'emotion';

const COMPOSE_ME = `${'css-COMPOSE_ME-16h2ri0'}`;

const COMPOSE_ME_TOO = `${'css-COMPOSE_ME_TOO-16h2ri0'}`;

const CompositeFunctionComponent = () => <div />;

class CompositeClassComponent extends React.Component {

  render() {
    return <div something={this.context.yep} />;
  }
}

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

        <div className={`${'css-1ibztja'}`} />

        <span className={`${'css-18gaxx6'}`}>
          Home
        </span>

        <div className={`${'css-1ibztja'}`} />

        <span className={`${'css-15dla7k'}`} onClick={this.handleClick}>
          Open Fade Overlay
        </span>

        <div className="will be transformed to constant" />
        <div className={`will not be transformed to constant`} />
        <div className={this.state.isUpdated} />
        <div className={grow} />

        <div className={'some-class-name' + ' ' + `${'css-qdl783'} ${COMPOSE_ME}`} />

        <div className={`${'css-slos8m'} ${COMPOSE_ME}`} />

        <div ref={() => console.log('This messes up constant and inline')} />

        <div className="will it be transformed to constant?">
          <div {...spreadBreaksInlineAndConstant} />
        </div>

        <div className="will it be transformed to constant?">
          <CompositeFunctionComponent something />
        </div>

        <CompositeClassComponent somethingElse />

      </div>;
  }
}
