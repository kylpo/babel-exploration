import React from 'react'
import { css } from 'emotion'

const CompositeFunctionComponent = () => <div />

class CompositeClassComponent extends React.Component {

  render() {
    return <div something={this.context.yep}/>
  }
}

export default class Home extends React.Component {
  handleClick() { }

  render() {
    const grow = 1
    const spreadBreaksInlineAndConstant = {}

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

        <div className='will be transformed to constant'/>
        <div className={`will not be transformed to constant`}/>
        <div className={this.state.isUpdated} />
        <div className={grow} />

        <div
          ref={() => console.log('This messes up constant and inline')}
        />

        <div {...spreadBreaksInlineAndConstant}/>

        <CompositeFunctionComponent something/>
        <CompositeClassComponent somethingElse/>

      </col>
    )
  }
}
