import React from 'react';
import { css } from 'emotion';

export default class Home extends React.Component {
  handleClick() {}

  render() {
    const grow = 1;

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

        <span css={`font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen-Sans,Ubuntu,Cantarell,Helvetica Neue,sans-serif;font-size: 20px;`}>
          Home
        </span>

        <span css={`font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen-Sans,Ubuntu,Cantarell,Helvetica Neue,sans-serif;font-size: 16px;
            padding: 16px;
            border: 1px solid #111;
          `} onClick={this.handleClick}>
          Open Fade Overlay
        </span>
      </div>;
  }
}
