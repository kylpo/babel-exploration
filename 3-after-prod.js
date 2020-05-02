var REACT_ELEMENT_TYPE;

function _jsx(type, props, key, children) { if (!REACT_ELEMENT_TYPE) { REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol["for"] && Symbol["for"]("react.element") || 0xeac7; } var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = { children: void 0 }; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = new Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }

import React from 'react';
import { css, styled } from 'linaria';
const COMPOSE_ME = "c1ywxa7t";
const COMPOSE_ME_TOO = "crfpk21";

var _ref = /*#__PURE__*/_jsx("div", {});

const CompositeFunctionComponent = () => _ref;

class CompositeClassComponent extends React.Component {
  render() {
    return /*#__PURE__*/_jsx("div", {
      something: this.context.yep
    });
  }

}

const StyledH1 = styled.h1`
background: 'red';
  font-family: ${families.serif};
  color: ${props => props.color};
`;

var _ref2 = /*#__PURE__*/_jsx(StyledH1, {
  color: "#333"
});

var _ref3 = /*#__PURE__*/_jsx("nav", {
  className: "nb1nppg"
});

var _ref4 = /*#__PURE__*/_jsx("div", {
  className: "d4vyljc"
});

var _ref5 = /*#__PURE__*/_jsx("div", {
  className: "d1tgdjja"
}, void 0, /*#__PURE__*/_jsx("div", {
  className: "d1izk7zw"
}), /*#__PURE__*/_jsx("div", {
  className: "dshlvcw"
}), /*#__PURE__*/_jsx("div", {
  className: "d10qko8x"
}));

var _ref6 = /*#__PURE__*/_jsx("div", {
  className: "d1rlirz7"
});

var _ref7 = /*#__PURE__*/_jsx("span", {
  className: "s1q06s0"
}, void 0, "Home");

var _ref8 = /*#__PURE__*/_jsx("div", {
  className: "d14b3da4"
});

var _ref9 = /*#__PURE__*/_jsx("div", {
  className: "will be transformed to constant"
});

var _ref10 = /*#__PURE__*/_jsx("div", {
  className: `will not be transformed to constant`
});

var _ref11 = /*#__PURE__*/_jsx("div", {
  className: "some-class-name"
});

var _ref12 = /*#__PURE__*/_jsx("div", {});

var _ref13 = /*#__PURE__*/_jsx("div", {
  className: "will it be transformed to constant?"
}, void 0, /*#__PURE__*/_jsx(CompositeFunctionComponent, {
  something: true
}));

var _ref14 = /*#__PURE__*/_jsx(CompositeClassComponent, {
  somethingElse: true
});

export default class Home extends React.Component {
  handleClick() {}

  render() {
    const grow = 1;
    const spreadBreaksInlineAndConstant = {};
    return /*#__PURE__*/_jsx("div", {
      className: "dp4dx06"
    }, void 0, _ref2, /*#__PURE__*/_jsx(StyledH1, {
      color: this.props.color
    }), _ref3, _ref4, _ref5, _ref6, _ref7, _ref8, /*#__PURE__*/_jsx("span", {
      onClick: this.handleClick,
      className: "s14ofj0y"
    }, void 0, "Open Fade Overlay"), _ref9, _ref10, /*#__PURE__*/_jsx("div", {
      className: this.state.isUpdated
    }), /*#__PURE__*/_jsx("div", {
      className: grow
    }), _ref11, _ref12, <div ref={() => console.log('This messes up constant and inline')} />, /*#__PURE__*/_jsx("div", {
      className: "will it be transformed to constant?"
    }, void 0, <div {...spreadBreaksInlineAndConstant} />), _ref13, _ref14);
  }

}
