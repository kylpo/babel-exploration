var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

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
      className: /*#__PURE__*/_css([], [], function createEmotionStyledRules() {
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
      })
    }), _jsx('div', {
      className: /*#__PURE__*/_css([], [], function createEmotionStyledRules() {
        return [{
          'WebkitBoxFlex': '0',
          'msFlexPositive': '0',
          'flexGrow': '0',
          'msFlexNegative': '0',
          'flexShrink': '0',
          'msFlexPreferredSize': '40px',
          'flexBasis': '40px'
        }];
      })
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
      className: /*#__PURE__*/_css([], [], function createEmotionStyledRules() {
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
      })
    }), _jsx('div', {
      className: /*#__PURE__*/_css([], [], function createEmotionStyledRules() {
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
      })
    }), _jsx('div', {
      className: /*#__PURE__*/_css([], [], function createEmotionStyledRules() {
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
      })
    })), _jsx('div', {
      className: /*#__PURE__*/_css([], [], function createEmotionStyledRules() {
        return [{
          'WebkitBoxFlex': '0',
          'msFlexPositive': '0',
          'flexGrow': '0',
          'msFlexNegative': '0',
          'flexShrink': '0',
          'msFlexPreferredSize': '40px',
          'flexBasis': '40px'
        }];
      })
    }), _jsx('span', {
      className: /*#__PURE__*/_css([], [], function createEmotionStyledRules() {
        return [{
          'fontFamily': '-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen-Sans,Ubuntu,Cantarell,Helvetica Neue,sans-serif',
          'fontSize': '20px'
        }];
      })
    }, void 0, 'Home'), _jsx('div', {
      className: /*#__PURE__*/_css([], [], function createEmotionStyledRules() {
        return [{
          'WebkitBoxFlex': '0',
          'msFlexPositive': '0',
          'flexGrow': '0',
          'msFlexNegative': '0',
          'flexShrink': '0',
          'msFlexPreferredSize': '40px',
          'flexBasis': '40px'
        }];
      })
    }), _jsx('span', {
      className: /*#__PURE__*/_css([], [], function createEmotionStyledRules() {
        return [{
          'fontFamily': '-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen-Sans,Ubuntu,Cantarell,Helvetica Neue,sans-serif',
          'fontSize': '16px',
          'padding': '16px',
          'border': '1px solid #111'
        }];
      }),
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
