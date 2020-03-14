import { createGlobalStyle } from "styled-components"
import * as fonts from "./fonts"
import { largeUp, mediumUp } from "./breakpoints"

export const GlobalStyle = createGlobalStyle`
  :root {
    --base-line: 1.5rem;
  }
  @media ${mediumUp} {
    :root {
      --base-line: 1.75rem;
    }
  }
  * {
    box-sizing: border-box;
  }
  @font-face {
    font-family: 'Sahel';
          src: url(${fonts.SahelBoldEOT});
  
    src: url(${fonts.SahelBoldEOT}?#iefix) format('eot'),  /* IE6–8 */
  url(${fonts.SahelBoldWOFF2}) format('woff2'),  /* Chrome36+, Opera24+*/
  url(${
    fonts.SahelBoldWOFF
  }) format('woff'),  /* FF3.6+, IE9, Chrome6+, Saf5.1+*/
 url(${fonts.SahelBoldTTF}) format('ttf');
    font-weight: 600;
    font-style: normal;
    font-display: swap;
  }
  @font-face {
    font-family: 'Sahel';
          src: url(${fonts.SahelEOT});
  
    src: url(${fonts.SahelEOT}?#iefix) format('eot'),  /* IE6–8 */
  url(${fonts.SahelWOFF2}) format('woff2'),  /* Chrome36+, Opera24+*/
  url(${fonts.SahelWOFF}) format('woff'),  /* FF3.6+, IE9, Chrome6+, Saf5.1+*/
  url(${fonts.SahelTTF}) format('ttf');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
  }
  html {
    direction: rtl;
  }
  html.ln__helper {
    background-size: 1px var(--base-line);
    background-image: linear-gradient(rgba(0, 188, 212, 0.23) 1px, transparent 0%, transparent);
    h1,
    h2,
    h3,
    h4 {
      background-color: rgba(255,227,194,0.7);
    }
  }
  html,
  body,
  h1,
  h2,
  h3,
  h4,
  p,
  ul,
  li,
  a {
    margin: 0;
    padding: 0;
  }
  html {
    font-family: Sahel, serif;
    background-color: ${props => props.theme.backColor};
    -webkit-font-smoothing: antialiased;
    line-height: var(--base-line);
    transition: background-color 0.5s ease;
  }
  .gatsby-highlight,
  .gatsby-highlight * {
    direction: ltr;
  }
  .main_width {
    width: 90%;
    margin: 0 auto;
    
    @media ${mediumUp} {
      width: 70%;
    }
    
    @media ${largeUp} {
      width: 50%;
    }
  }
`
