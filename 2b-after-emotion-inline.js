import { css as _css } from 'emotion';
import React from 'react';
import { css } from 'emotion';

const COMPOSE_ME = /*#__PURE__*/css([], [], function createEmotionStyledRules() {
  return [{
    'display': '-webkit-box; display: -ms-flexbox; display: flex',
    'position': 'absolute'
  }];
});

const COMPOSE_ME_TOO = /*#__PURE__*/css([], [], function createEmotionStyledRules() {
  return [{
    'display': '-webkit-box; display: -ms-flexbox; display: flex',
    'position': 'absolute'
  }];
});

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
        <nav className={/*#__PURE__*/_css([], [], function createEmotionStyledRules() {
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
          'width': '300px',
          'height': '30px',
          'margin': '20px',
          'backgroundColor': 'purple'
        }];
      })} />

        <div className={/*#__PURE__*/_css([], [], function createEmotionStyledRules() {
        return [{
          'WebkitBoxFlex': '0',
          'msFlexPositive': '0',
          'flexGrow': '0',
          'msFlexNegative': '0',
          'flexShrink': '0',
          'msFlexPreferredSize': '40px',
          'flexBasis': '40px'
        }];
      })} />

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
          <div className={/*#__PURE__*/_css([], [], function createEmotionStyledRules() {
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
            'WebkitBoxFlex': '1',
            'msFlexPositive': '1',
            'flexGrow': '1',
            'backgroundColor': 'red'
          }];
        })} />
          <div className={/*#__PURE__*/_css([], [], function createEmotionStyledRules() {
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
            'WebkitBoxFlex': '1',
            'msFlexPositive': '1',
            'flexGrow': '1',
            'backgroundColor': 'green'
          }];
        })} />
          <div className={/*#__PURE__*/_css([], [], function createEmotionStyledRules() {
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
            'WebkitBoxFlex': '1',
            'msFlexPositive': '1',
            'flexGrow': '1',
            'backgroundColor': 'blue'
          }];
        })} />
        </div>

        <div className={/*#__PURE__*/_css([], [], function createEmotionStyledRules() {
        return [{
          'WebkitBoxFlex': '0',
          'msFlexPositive': '0',
          'flexGrow': '0',
          'msFlexNegative': '0',
          'flexShrink': '0',
          'msFlexPreferredSize': '40px',
          'flexBasis': '40px'
        }];
      })} />

        <span className={/*#__PURE__*/_css([], [], function createEmotionStyledRules() {
        return [{
          'fontFamily': '-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen-Sans,Ubuntu,Cantarell,Helvetica Neue,sans-serif',
          'fontSize': '20px'
        }];
      })}>
          Home
        </span>

        <div className={/*#__PURE__*/_css([], [], function createEmotionStyledRules() {
        return [{
          'WebkitBoxFlex': '0',
          'msFlexPositive': '0',
          'flexGrow': '0',
          'msFlexNegative': '0',
          'flexShrink': '0',
          'msFlexPreferredSize': '40px',
          'flexBasis': '40px'
        }];
      })} />

        <span className={/*#__PURE__*/_css([], [], function createEmotionStyledRules() {
        return [{
          'fontFamily': '-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen-Sans,Ubuntu,Cantarell,Helvetica Neue,sans-serif',
          'fontSize': '16px',
          'padding': '16px',
          'border': '1px solid #111'
        }];
      })} onClick={this.handleClick}>
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
