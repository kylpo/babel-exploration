import { css as _css } from 'emotion';
import './1-after-constelation.emotion.css';
import React from 'react';
import { css } from 'emotion';

const COMPOSE_ME = 'css-COMPOSE_ME-16h2ri0';

const COMPOSE_ME_TOO = 'css-COMPOSE_ME_TOO-16h2ri0';

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

    return <div className={/*#__PURE__*/_css([], [grow], function createEmotionStyledRules(x0) {
      return [{
        'display': '-webkit-box; display: -ms-flexbox; display: flex',
        'WebkitBoxOrient': 'vertical',
        'WebkitBoxDirection': 'normal',
        'msFlexDirection': 'column',
        'flexDirection': 'column',
        'msFlexNegative': '0',
        'flexShrink': '0',
        'msFlexLinePack': 'start',
        'alignContent': 'flex-start',
        'position': 'relative',
        'WebkitBoxAlign': 'center',
        'msFlexAlign': 'center',
        'alignItems': 'center',
        'WebkitBoxPack': 'center',
        'msFlexPack': 'center',
        'justifyContent': 'center',
        'WebkitBoxFlex': `${x0}`,
        'msFlexPositive': `${x0}`,
        'flexGrow': `${x0}`
      }];
    })}>
        <nav className={"css-kssq5x"} />

        <div className={"css-1ibztja"} />

        <div className={/*#__PURE__*/_css([], [this.state.isUpdated ? 'column' : 'row'], function createEmotionStyledRules(x0) {
        return [{
          'display': '-webkit-box; display: -ms-flexbox; display: flex',
          'msFlexNegative': '0',
          'flexShrink': '0',
          'msFlexLinePack': 'start',
          'alignContent': 'flex-start',
          'position': 'relative',
          'WebkitBoxOrient': 'vertical',
          'WebkitBoxDirection': 'normal',
          'msFlexDirection': `${x0}`,
          'flexDirection': `${x0}`,
          'height': '200px',
          'width': '400px'
        }];
      })}>
          <div className={"css-10n0dl7"} />
          <div className={"css-asuv6"} />
          <div className={"css-cb9ahb"} />
        </div>

        <div className={"css-1ibztja"} />

        <span className={"css-18gaxx6"}>
          Home
        </span>

        <div className={"css-1ibztja"} />

        <span className={"css-15dla7k"} onClick={this.handleClick}>
          Open Fade Overlay
        </span>

        <div className="will be transformed to constant" />
        <div className={`will not be transformed to constant`} />
        <div className={this.state.isUpdated} />
        <div className={grow} />

        <div className={'some-class-name' + ' ' + /*#__PURE__*/_css([COMPOSE_ME], [], function createEmotionStyledRules() {
        return [{
          'backgroundColor': 'red'
        }];
      })} />

        <div className={/*#__PURE__*/_css([COMPOSE_ME], [], function createEmotionStyledRules() {
        return [{
          'backgroundColor': 'green'
        }];
      })} />

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
