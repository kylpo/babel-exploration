import React from 'react';
import { css } from 'emotion';

const COMPOSE_ME = css`
  display: flex;
  position: absolute;
`;

const COMPOSE_ME_TOO = css`
  display: flex;
  position: absolute;
`;

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

    return <div css={`display: flex;flex-direction: column;flex-shrink: 0;align-content: flex-start;position: relative;align-items: center;justify-content: center;flex-grow: ${grow};`}>
        <nav css={`display: flex;flex-direction: column;flex-shrink: 0;align-content: flex-start;position: relative;width: 300px;height: 30px;margin: 20px;
            background-color: purple;
          `} />

        <div css={`flex-grow: 0;flex-shrink: 0;flex-basis: 40px;`} />

        <div css={`display: flex;flex-shrink: 0;align-content: flex-start;position: relative;flex-direction: ${this.state.isUpdated ? 'column' : 'row'};height: 200px;width: 400px;`}>
          <div css={`display: flex;flex-direction: column;flex-shrink: 0;align-content: flex-start;position: relative;flex-grow: 1;
              background-color: red;
            `} />
          <div css={`display: flex;flex-direction: column;flex-shrink: 0;align-content: flex-start;position: relative;flex-grow: 1;
              background-color: green;
            `} />
          <div css={`display: flex;flex-direction: column;flex-shrink: 0;align-content: flex-start;position: relative;flex-grow: 1;
              background-color: blue;
            `} />
        </div>

        <div css={`flex-grow: 0;flex-shrink: 0;flex-basis: 40px;`} />

        <span css={`font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen-Sans,Ubuntu,Cantarell,Helvetica Neue,sans-serif;font-size: 20px;`}>
          Home
        </span>

        <div css={`flex-grow: 0;flex-shrink: 0;flex-basis: 40px;`} />

        <span css={`font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen-Sans,Ubuntu,Cantarell,Helvetica Neue,sans-serif;font-size: 16px;
            padding: 16px;
            border: 1px solid #111;
          `} onClick={this.handleClick}>
          Open Fade Overlay
        </span>

        <div className="will be transformed to constant" />
        <div className={`will not be transformed to constant`} />
        <div className={this.state.isUpdated} />
        <div className={grow} />

        <div className="some-class-name" css={`
            composes: ${COMPOSE_ME};
            background-color: red;
          `} />

        <div css={`
            composes: ${COMPOSE_ME};
            background-color: green;
          `} />

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
