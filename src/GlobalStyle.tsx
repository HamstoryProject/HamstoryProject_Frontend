import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import { FONTS } from "./config";

const GlobalStyle = createGlobalStyle`
  ${reset};

  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, menu, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  main, menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }

  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure,
  footer, header, hgroup, main, menu, nav, section {
    display: block;
  }

  /* HTML5 hidden-attribute fix for newer browsers */
  *[hidden] {
    display: none;
  }

  a{
    text-decoration: none;
  }

  menu, ol, ul {
    list-style: none;
  }

  blockquote, q {
    quotes: none;
  }

  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  //style custom
  *{
    box-sizing: border-box;
  }
  
  @font-face {
    font-family: 'NotoSansKRMedium';
    src: url(${FONTS.NOTOSANS_KR});
  }

  body{
    background-color: white;
    color: black;
    font-family: 'NotoSansKRMedium';
    font-size: 18px;
    letter-spacing: -0.7px;
  }

  h1{
    font-size: 50px;
    letter-spacing: -3px;
    line-height: 1.4;
    color: black;
  }

  h2{
    font-size: 28px;
    letter-spacing: -1.5px;
    color: black;
  }

  h3{
    font-size: 22px;
    letter-spacing: -1px;
    line-height: 1.5;
    color: black;
  }

  b{
    font-size: 1.3em;
    color: black
  }
`;

export default GlobalStyle;