import { createGlobalStyle } from 'styled-components';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export const GlobalStyle = createGlobalStyle`


  @font-face {
  font-family: 'NanumBarunGothic';
  font-style: normal;
  font-weight: 400;
  src: url('//cdn.jsdelivr.net/font-nanumlight/1.0/NanumBarunGothicWeb.eot');
  src: url('//cdn.jsdelivr.net/font-nanumlight/1.0/NanumBarunGothicWeb.eot?#iefix') format('embedded-opentype'), url('//cdn.jsdelivr.net/font-nanumlight/1.0/NanumBarunGothicWeb.woff') format('woff'), url('//cdn.jsdelivr.net/font-nanumlight/1.0/NanumBarunGothicWeb.ttf') format('truetype');
  }

  @font-face {
  font-family: 'NanumBarunGothic';
  font-style: normal;
  font-weight: 700;
  src: url('//cdn.jsdelivr.net/font-nanumlight/1.0/NanumBarunGothicWebBold.eot');
  src: url('//cdn.jsdelivr.net/font-nanumlight/1.0/NanumBarunGothicWebBold.eot?#iefix') format('embedded-opentype'), url('//cdn.jsdelivr.net/font-nanumlight/1.0/NanumBarunGothicWebBold.woff') format('woff'), url('//cdn.jsdelivr.net/font-nanumlight/1.0/NanumBarunGothicWebBold.ttf') format('truetype')
  }

  @font-face {
  font-family: 'NanumBarunGothic';
  font-style: normal;
  font-weight: 300;
  src: url('//cdn.jsdelivr.net/font-nanumlight/1.0/NanumBarunGothicWebLight.eot');
  src: url('//cdn.jsdelivr.net/font-nanumlight/1.0/NanumBarunGothicWebLight.eot?#iefix') format('embedded-opentype'), url('//cdn.jsdelivr.net/font-nanumlight/1.0/NanumBarunGothicWebLight.woff') format('woff'), url('//cdn.jsdelivr.net/font-nanumlight/1.0/NanumBarunGothicWebLight.ttf') format('truetype');
  }

  .nanumbarungothic * {
  font-family: 'NanumBarunGothic', sans-serif;
  }
  :root {
    --vh: 100%;
   }

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
    border: 0;
    padding: 0;
    vertical-align: baseline;
    font: inherit;
    font-size: 100%;
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
  body {
    touch-action: manipulation;
    line-height: 1;
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
  
  /* 위에가 styled-reset 내용 */

  * {
    box-sizing: border-box;
  } 
  html {
    -webkit-touch-callout: none;
    /* -webkit-user-select:none; */
    -webkit-tap-highlight-color:rgba(0, 0, 0, 0);
    
    scroll-behavior: smooth;

    font-family: sans-serif;
    font-size: 62.5%;
    user-select: none;
  }
  ul, li {
    padding-left: 0rem;
    list-style: none;
  }
  a {
    text-decoration: none;
    color: inherit;
  }
  input, button {
    outline: none; 
    border: none;
    background-color: transparent;
  }
  button {
    cursor: pointer;
    padding: 0;
  }
  input {
    appearance: none;
    
    &:focus {
      outline: none;
    }
  }
   .slick-slide {
	  display: inline-block;
    margin: 0 2.2rem;

    width: 16.6rem;
    height: 22.2rem;


  }

  .slick-slider {
	  display: inline-block;

	  width: 110rem;
    padding: 0;
    margin-left: 5rem;
  }

  
`;
