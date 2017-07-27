import React from 'react'
import { css } from 'emotion'

export default class Home extends React.Component {
  handleClick() { }

  render() {
    const grow = 1

    return (
      <col
        center
        grow={grow}
      >
        <view
          as='nav'
          width='300px'
          height='30px'
          margin='20px'
          css={`
            background-color: purple;
          `}
        />

        <space size='40px' />

        <flex
          direction={this.state.isUpdated ? 'column' : 'row'}
          height='200px'
          width='400px'
        >
          <view
            grow
            css={`
              background-color: red;
            `}
          />
          <view
            grow
            css={`
              background-color: green;
            `}
          />
          <view
            grow
            css={`
              background-color: blue;
            `}
          />
        </flex>

        <text size='20px'>
          Home
        </text>

        <text
          size='16px'
          onClick={this.handleClick}
          css={`
            padding: 16px;
            border: 1px solid #111;
          `}
        >
          Open Fade Overlay
        </text>
      </col>
    )
  }
}
