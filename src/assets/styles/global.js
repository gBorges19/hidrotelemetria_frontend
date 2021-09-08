import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;

  }
  body {
    -webkit-font-smoothing: antialiased !important;
    background: linear-gradient(to bottom right, #f0edf2 34%, #a7a9aa 100%);
  }
  body html #root {
    height: 100%;
  }
`;