var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

import './1-after-constelation.emotion.css';
import React from 'react';
import { css } from 'emotion';

export default class Home extends React.Component {
  handleClick() {}

  render() {
    const grow = 1;

    return _jsx('div', {
      className: css(['css-1s18j1e'], [grow])
    }, void 0, _jsx('nav', {
      className: `${'css-kssq5x'}`
    }), _jsx('div', {
      className: `${'css-1ibztja'}`
    }), _jsx('div', {
      className: css(['css-ypm15r'], [this.state.isUpdated ? 'column' : 'row'])
    }, void 0, _jsx('div', {
      className: `${'css-10n0dl7'}`
    }), _jsx('div', {
      className: `${'css-asuv6'}`
    }), _jsx('div', {
      className: `${'css-cb9ahb'}`
    })), _jsx('span', {
      className: `${'css-18gaxx6'}`
    }, void 0, 'Home'), _jsx('span', {
      className: `${'css-15dla7k'}`,
      onClick: this.handleClick
    }, void 0, 'Open Fade Overlay'));
  }
}
