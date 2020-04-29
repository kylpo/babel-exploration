var REACT_ELEMENT_TYPE;

function _jsx(type, props, key, children) { if (!REACT_ELEMENT_TYPE) { REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol["for"] && Symbol["for"]("react.element") || 0xeac7; } var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = { children: void 0 }; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = new Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }

import React from 'react';
import { css } from 'linaria';
const COMPOSE_ME = "c1ywxa7t";
const COMPOSE_ME_TOO = "crfpk21";

const CompositeFunctionComponent = () => /*#__PURE__*/_jsx("div", {});

class CompositeClassComponent extends React.Component {
  render() {
    return /*#__PURE__*/_jsx("div", {
      something: this.context.yep
    });
  }

}

export default class Home extends React.Component {
  handleClick() {}

  render() {
    const grow = 1;
    const spreadBreaksInlineAndConstant = {};
    return /*#__PURE__*/_jsx("div", {
      className: "dp4dx06"
    }, void 0, /*#__PURE__*/_jsx("nav", {
      className: "nb1nppg"
    }), /*#__PURE__*/_jsx("div", {
      className: "d4vyljc"
    }), /*#__PURE__*/_jsx("div", {
      className: "d1tgdjja"
    }, void 0, /*#__PURE__*/_jsx("div", {
      className: "d1izk7zw"
    }), /*#__PURE__*/_jsx("div", {
      className: "dshlvcw"
    }), /*#__PURE__*/_jsx("div", {
      className: "d10qko8x"
    })), /*#__PURE__*/_jsx("div", {
      className: "d1rlirz7"
    }), /*#__PURE__*/_jsx("span", {
      className: "s1q06s0"
    }, void 0, "Home"), /*#__PURE__*/_jsx("div", {
      className: "d14b3da4"
    }), /*#__PURE__*/_jsx("span", {
      onClick: this.handleClick,
      className: "s14ofj0y"
    }, void 0, "Open Fade Overlay"), /*#__PURE__*/_jsx("div", {
      className: "will be transformed to constant"
    }), /*#__PURE__*/_jsx("div", {
      className: `will not be transformed to constant`
    }), /*#__PURE__*/_jsx("div", {
      className: this.state.isUpdated
    }), /*#__PURE__*/_jsx("div", {
      className: grow
    }), /*#__PURE__*/_jsx("div", {
      className: "some-class-name"
    }), /*#__PURE__*/_jsx("div", {}), <div ref={() => console.log('This messes up constant and inline')} />, /*#__PURE__*/_jsx("div", {
      className: "will it be transformed to constant?"
    }, void 0, <div {...spreadBreaksInlineAndConstant} />), /*#__PURE__*/_jsx("div", {
      className: "will it be transformed to constant?"
    }, void 0, /*#__PURE__*/_jsx(CompositeFunctionComponent, {
      something: true
    })), /*#__PURE__*/_jsx(CompositeClassComponent, {
      somethingElse: true
    }));
  }

}
