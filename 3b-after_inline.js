var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

import { css as _css } from 'emotion';
import './1-after-constelation.emotion.css';
import React from 'react';
import { css } from 'emotion';

const COMPOSE_ME = 'css-COMPOSE_ME-16h2ri0';

const COMPOSE_ME_TOO = 'css-COMPOSE_ME_TOO-16h2ri0';

const CompositeFunctionComponent = () => _jsx('div', {});

class CompositeClassComponent extends React.Component {

  render() {
    return _jsx('div', {
      something: this.context.yep
    });
  }
}

export default class Home extends React.Component {
  handleClick() {}

  render() {
    const grow = 1;
    const spreadBreaksInlineAndConstant = {};

    return _jsx('div', {
      className: /*#__PURE__*/_css([], [grow], function createEmotionStyledRules(x0) {
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
      })
    }, void 0, _jsx('nav', {
      className: "css-kssq5x"
    }), _jsx('div', {
      className: "css-1ibztja"
    }), _jsx('div', {
      className: /*#__PURE__*/_css([], [this.state.isUpdated ? 'column' : 'row'], function createEmotionStyledRules(x0) {
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
      })
    }, void 0, _jsx('div', {
      className: "css-10n0dl7"
    }), _jsx('div', {
      className: "css-asuv6"
    }), _jsx('div', {
      className: "css-cb9ahb"
    })), _jsx('div', {
      className: "css-1ibztja"
    }), _jsx('span', {
      className: "css-18gaxx6"
    }, void 0, 'Home'), _jsx('div', {
      className: "css-1ibztja"
    }), _jsx('span', {
      className: "css-15dla7k",
      onClick: this.handleClick
    }, void 0, 'Open Fade Overlay'), _jsx('div', {
      className: 'will be transformed to constant'
    }), _jsx('div', {
      className: `will not be transformed to constant`
    }), _jsx('div', {
      className: this.state.isUpdated
    }), _jsx('div', {
      className: grow
    }), _jsx('div', {
      className: 'some-class-name' + ' ' + /*#__PURE__*/_css([COMPOSE_ME], [], function createEmotionStyledRules() {
        return [{
          'backgroundColor': 'red'
        }];
      })
    }), _jsx('div', {
      className: /*#__PURE__*/_css([COMPOSE_ME], [], function createEmotionStyledRules() {
        return [{
          'backgroundColor': 'green'
        }];
      })
    }), <div ref={() => console.log('This messes up constant and inline')} />, _jsx('div', {
      className: 'will it be transformed to constant?'
    }, void 0, <div {...spreadBreaksInlineAndConstant} />), _jsx('div', {
      className: 'will it be transformed to constant?'
    }, void 0, _jsx(CompositeFunctionComponent, {
      something: true
    })), _jsx(CompositeClassComponent, {
      somethingElse: true
    }));
  }
}
