import { createGlobalStyle } from 'styled-components';

import Roboto from './fonts/Roboto.woff';
import Roboto2 from './fonts/Roboto.woff2';

const GlobalStyle = createGlobalStyle`
    body {
        padding: 0;
        margin: 0;
        font-family: 'Roboto';
    }
    
    @font-face {
        font-family: 'Roboto';
        src: local('Roboto'), local('Roboto2'),
        url(${Roboto}) format('woff'),
        url(${Roboto2}) format('woff2');
        font-weight: 300;
        font-style: normal;
    }
`;

export default GlobalStyle;
