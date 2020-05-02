import React from 'react';
import { css, styled } from 'linaria';
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

const StyledH1 = styled.h1`
background: 'red';
  font-family: ${families.serif};
  color: ${props => props.color};
`;
export default class Home extends React.Component {
  handleClick() {}

  render() {
    const grow = 1;
    const spreadBreaksInlineAndConstant = {};
    return <div className={css`
  display: flex;
  flex-direction: column;
  align-content: flex-start;
  position: relative;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  flex-grow: ${grow};
`}>

      <StyledH1 color="#333" />

      <StyledH1 color={this.props.color} />

        <nav className={css`
  display: flex;
  align-content: flex-start;
  position: relative;
  flex-shrink: 0;
  width: 300px;
  height: 30px;
  margin: 20px;
  background-color: purple;
`} />

        <div className={css`
  flex-grow: 0;
  flex-shrink: 0;
  flex-basis: 40px;
`} />

        <div className={css`
  display: flex;
  align-content: flex-start;
  position: relative;
  flex-shrink: 0;
  flex-direction: column;
  height: 200px;
  width: 400px;
`}>
          <div className={css`
  display: flex;
  align-content: flex-start;
  position: relative;
  flex-shrink: 0;
  flex-grow: 1;
  background-color: red;
`} />
          <div className={css`
  display: flex;
  align-content: flex-start;
  position: relative;
  flex-shrink: 0;
  flex-grow: 1;
  background-color: green;
`} />
          <div className={css`
  display: flex;
  align-content: flex-start;
  position: relative;
  flex-shrink: 0;
  flex-grow: 1;
  background-color: blue;
`} />
        </div>

        <div className={css`
  flex-grow: 0;
  flex-shrink: 0;
  flex-basis: 40px;
`} />

        <span className={css`
  font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen-Sans,Ubuntu,Cantarell,Helvetica Neue,sans-serif;
  font-size: 20px;
`}>
          Home
        </span>

        <div className={css`
  flex-grow: 0;
  flex-shrink: 0;
  flex-basis: 40px;
`} />

        <span onClick={this.handleClick} className={css`
  font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen-Sans,Ubuntu,Cantarell,Helvetica Neue,sans-serif;
  font-size: 16px;
  padding: 16px;
  border: 1px solid #111;
`}>
          Open Fade Overlay
        </span>

        <div className='will be transformed to constant' />
        <div className={`will not be transformed to constant`} />
        <div className={this.state.isUpdated} />
        <div className={grow} />

        <div className='some-class-name' />

        <div />

        <div ref={() => console.log('This messes up constant and inline')} />

        <div className='will it be transformed to constant?'>
          <div {...spreadBreaksInlineAndConstant} />
        </div>

        <div className='will it be transformed to constant?'>
          <CompositeFunctionComponent something />
        </div>

        <CompositeClassComponent somethingElse />

      </div>;
  }

}
