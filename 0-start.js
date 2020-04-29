import React from 'react'
import { css } from 'linaria'

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
