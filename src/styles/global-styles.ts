import { createGlobalStyle } from 'styled-components';
import { StyleConstants } from './StyleConstants';
/* istanbul ignore next */
export const GlobalStyle = createGlobalStyle`
  html,
  body {
    height: 100%;
    width: 100%;
    line-height: 1.5;
  }

  body {
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
    padding-top: ${StyleConstants.NAV_BAR_HEIGHT};
    background-color: ${p => p.theme.background};
  }

  body.fontLoaded {
    font-family: 'Inter', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  p,
  label {
    line-height: 1.5em;
  }

  input, select, button {
    font-family: inherit;
    font-size: inherit;
  }

  .icon {
    width: 1.5rem;
    height: 1.5rem;
  }

  .card_info_tittle {
    text-shadow: -2px 2px 0px rgba(28, 28, 28, 0.25);
    font-weight: 400;
    font-style: italic;
    font-size: 85px;
    font-family: Meow Script;
    margin: 0px;
  }

  .rotate {
    rotate: 180deg;
  }

  .dot {
    width: 17px;
    height: 17px;
    border-radius: 50%;
    background-color: ${p => p.theme.yellow};
    margin-top: 30px;
    margin-left: auto;
    margin-right: auto;
  }

  .rotateLeft45 {
    rotate: -45deg;
  }

  .tittle {
    text-align: center;
    color: ${p => p.theme.text};
    font-family: Philosopher;
    font-weight: 400;
  }

  .tittle_h2 {
    font-size: 55px;
  }

  .tittle_h1 {
    font-size: 66px;
  }
  .tittle_h3 {
    font-size: 36px;
  }

  .font_calligraphy {
    font-family: Meow Script;
  }

  .picture_profile {
    width: 410px;
    height: 580px;
    border: 1px solid ${p => p.theme.yellow};
  }

  @media only screen and (max-width: 672px) {
    .cardLeftImg, .cardRightImg {
      max-width: 170px;
    }
  }

  @media only screen and (max-width: 1160px) {
    .cardLeftImg, .cardRightImg {
      max-width: 150px;
    }
  }

`;
