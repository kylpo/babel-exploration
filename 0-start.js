import React from 'react'
import { css, styled } from 'linaria'
import {resolve} from 'styled-jsx/css'

const COMPOSE_ME = css`
  display: flex;
  position: absolute;
`

const COMPOSE_ME_TOO = css`
  display: flex;
  position: absolute;
`

const CompositeFunctionComponent = () => <div />

class CompositeClassComponent extends React.Component {

  render() {
    return <div something={this.context.yep}/>
  }
}

const StyledH1 = styled.h1`
background: 'red';
  font-family: ${families.serif};
  color: ${props => props.color};
`;

/* 
static style:

resolve`
  a { color: green }
`
*/
resolve`
  a { color: green }
`;

/* 
dynamic style:

resolve`
  color: ${color};
`
*/
(color) => (
  resolve`
    color: ${color};
  `
);

/*
static and dynamic:

resolve`
    color: ${color};
    background-color: red;
  `
*/
(color) => (
  resolve`
    color: ${color};
    background-color: red;
  `
);

export default class Home extends React.Component {
  handleClick() { }

  render() {
    const grow = 1
    const spreadBreaksInlineAndConstant = {}

    return (
      <col
        center
        grow={grow}
        onMouseEnter={() => console.log("ENTER")}
        onMouseOver={() => console.log("OVER")}
        onMouseLeave={() => console.log("LEAVE")}
      >

      <StyledH1 color="#333"/>

      <StyledH1 color={this.props.color} />

      <space size={{_: 30, 'hover': 60}} />

      <space size={this.props.size} />

        <view
          as='nav'
          width='300px'
          height='30px'
          margin='20px'
          style={{
            backgroundColor: 'purple'
          }}
        />

        <space size='40px' />

        <flex
          direction={'column'}
          height='200px'
          width='400px'
        >
          <view
            grow
            style={{
              backgroundColor: 'red'
            }}
          />
          <view
            grow
            style={{
              backgroundColor: 'green'
            }}
          />
          <view
            grow
            style={{
              backgroundColor: 'blue'
            }}
          />
        </flex>

        <space size='40px' />

        <text size='20px'>
          Home
        </text>

        <space size='40px' />

        <text
          size='16px'
          onClick={this.handleClick}
          style={{
            padding: 16,
            border: '1px solid #111',
          }}
        >
          Open Fade Overlay
        </text>

        <div className='will be transformed to constant'/>
        <div className={`will not be transformed to constant`}/>
        <div className={this.state.isUpdated} />
        <div className={grow} />

        <div
          className='some-class-name'
        />

        <div />

        <div
          ref={() => console.log('This messes up constant and inline')}
        />

        <div className='will it be transformed to constant?'>
          <div {...spreadBreaksInlineAndConstant}/>
        </div>

        <div className='will it be transformed to constant?'>
          <CompositeFunctionComponent something/>
        </div>

        <CompositeClassComponent somethingElse/>

      </col>
    )
  }
}
