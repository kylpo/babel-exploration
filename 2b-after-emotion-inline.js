import React from 'react';
import { css } from 'emotion';

const COMPOSE_ME = css(['css-COMPOSE_ME-16h2ri0'], [], function createEmotionRules() {
  return [`.css-COMPOSE_ME-16h2ri0 { display: -webkit-box; display: -moz-box; display: -ms-flexbox; display: -webkit-flex; display: flex;
  position: absolute; }`];
});

const COMPOSE_ME_TOO = css(['css-COMPOSE_ME_TOO-16h2ri0'], [], function createEmotionRules() {
  return [`.css-COMPOSE_ME_TOO-16h2ri0 { display: -webkit-box; display: -moz-box; display: -ms-flexbox; display: -webkit-flex; display: flex;
  position: absolute; }`];
});

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

    return <div className={css(['css-1s18j1e'], [grow], function createEmotionRules(x0) {
      return [`.css-1s18j1e { display: -webkit-box; display: -moz-box; display: -ms-flexbox; display: -webkit-flex; display: flex;-webkit-flex-direction: column;-ms-flex-direction: column;-webkit-box-orient: vertical;-webkit-box-direction: normal;flex-direction: column;-webkit-flex-shrink: 0;-ms-flex-negative: 0;flex-shrink: 0;-webkit-align-content: flex-start;-ms-flex-line-pack: start;align-content: flex-start;position: relative;-webkit-align-items: center;-ms-flex-align: center;-webkit-box-align: center;align-items: center;-webkit-justify-content: center;-ms-flex-pack: center;-webkit-box-pack: center;justify-content: center;-webkit-flex-grow: ${x0};-ms-flex-positive: ${x0};flex-grow: ${x0}; }`];
    })}>
        <nav className={css(['css-kssq5x'], [], function createEmotionRules() {
        return [`.css-kssq5x { display: -webkit-box; display: -moz-box; display: -ms-flexbox; display: -webkit-flex; display: flex;-webkit-flex-direction: column;-ms-flex-direction: column;-webkit-box-orient: vertical;-webkit-box-direction: normal;flex-direction: column;-webkit-flex-shrink: 0;-ms-flex-negative: 0;flex-shrink: 0;-webkit-align-content: flex-start;-ms-flex-line-pack: start;align-content: flex-start;position: relative;width: 300px;height: 30px;margin: 20px;
            background-color: purple; }`];
      })} />

        <div className={css(['css-1ibztja'], [], function createEmotionRules() {
        return [`.css-1ibztja { -webkit-flex-grow: 0; -ms-flex-positive: 0; flex-grow: 0;-webkit-flex-shrink: 0;-ms-flex-negative: 0;flex-shrink: 0;-webkit-flex-basis: 40px;-ms-preferred-size: 40px;flex-basis: 40px; }`];
      })} />

        <div className={css(['css-ypm15r'], [this.state.isUpdated ? 'column' : 'row'], function createEmotionRules(x0) {
        return [`.css-ypm15r { display: -webkit-box; display: -moz-box; display: -ms-flexbox; display: -webkit-flex; display: flex;-webkit-flex-shrink: 0;-ms-flex-negative: 0;flex-shrink: 0;-webkit-align-content: flex-start;-ms-flex-line-pack: start;align-content: flex-start;position: relative;-webkit-flex-direction: ${x0};-ms-flex-direction: ${x0};-webkit-box-orient: horizontal;-webkit-box-direction: normal;flex-direction: ${x0};height: 200px;width: 400px; }`];
      })}>
          <div className={css(['css-10n0dl7'], [], function createEmotionRules() {
          return [`.css-10n0dl7 { display: -webkit-box; display: -moz-box; display: -ms-flexbox; display: -webkit-flex; display: flex;-webkit-flex-direction: column;-ms-flex-direction: column;-webkit-box-orient: vertical;-webkit-box-direction: normal;flex-direction: column;-webkit-flex-shrink: 0;-ms-flex-negative: 0;flex-shrink: 0;-webkit-align-content: flex-start;-ms-flex-line-pack: start;align-content: flex-start;position: relative;-webkit-flex-grow: 1;-ms-flex-positive: 1;flex-grow: 1;
              background-color: red; }`];
        })} />
          <div className={css(['css-asuv6'], [], function createEmotionRules() {
          return [`.css-asuv6 { display: -webkit-box; display: -moz-box; display: -ms-flexbox; display: -webkit-flex; display: flex;-webkit-flex-direction: column;-ms-flex-direction: column;-webkit-box-orient: vertical;-webkit-box-direction: normal;flex-direction: column;-webkit-flex-shrink: 0;-ms-flex-negative: 0;flex-shrink: 0;-webkit-align-content: flex-start;-ms-flex-line-pack: start;align-content: flex-start;position: relative;-webkit-flex-grow: 1;-ms-flex-positive: 1;flex-grow: 1;
              background-color: green; }`];
        })} />
          <div className={css(['css-cb9ahb'], [], function createEmotionRules() {
          return [`.css-cb9ahb { display: -webkit-box; display: -moz-box; display: -ms-flexbox; display: -webkit-flex; display: flex;-webkit-flex-direction: column;-ms-flex-direction: column;-webkit-box-orient: vertical;-webkit-box-direction: normal;flex-direction: column;-webkit-flex-shrink: 0;-ms-flex-negative: 0;flex-shrink: 0;-webkit-align-content: flex-start;-ms-flex-line-pack: start;align-content: flex-start;position: relative;-webkit-flex-grow: 1;-ms-flex-positive: 1;flex-grow: 1;
              background-color: blue; }`];
        })} />
        </div>

        <div className={css(['css-1ibztja'], [], function createEmotionRules() {
        return [`.css-1ibztja { -webkit-flex-grow: 0; -ms-flex-positive: 0; flex-grow: 0;-webkit-flex-shrink: 0;-ms-flex-negative: 0;flex-shrink: 0;-webkit-flex-basis: 40px;-ms-preferred-size: 40px;flex-basis: 40px; }`];
      })} />

        <span className={css(['css-18gaxx6'], [], function createEmotionRules() {
        return [`.css-18gaxx6 { font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen-Sans,Ubuntu,Cantarell,Helvetica Neue,sans-serif;font-size: 20px; }`];
      })}>
          Home
        </span>

        <div className={css(['css-1ibztja'], [], function createEmotionRules() {
        return [`.css-1ibztja { -webkit-flex-grow: 0; -ms-flex-positive: 0; flex-grow: 0;-webkit-flex-shrink: 0;-ms-flex-negative: 0;flex-shrink: 0;-webkit-flex-basis: 40px;-ms-preferred-size: 40px;flex-basis: 40px; }`];
      })} />

        <span className={css(['css-15dla7k'], [], function createEmotionRules() {
        return [`.css-15dla7k { font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen-Sans,Ubuntu,Cantarell,Helvetica Neue,sans-serif;font-size: 16px;
            padding: 16px;
            border: 1px solid #111; }`];
      })} onClick={this.handleClick}>
          Open Fade Overlay
        </span>

        <div className="will be transformed to constant" />
        <div className={`will not be transformed to constant`} />
        <div className={this.state.isUpdated} />
        <div className={grow} />

        <div className={'some-class-name' + ' ' + css(['css-qdl783', COMPOSE_ME], [], function createEmotionRules() {
        return [`.css-qdl783 {
            background-color: red; }`];
      })} />

        <div className={css(['css-slos8m', COMPOSE_ME], [], function createEmotionRules() {
        return [`.css-slos8m {
            background-color: green; }`];
      })} />

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
