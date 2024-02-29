import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Karla', sans-serif;
        text-decoration: none;
    }

    #basic-addon1 {
        background: rgba(255,255,255,0.5);
        border: none;
    }

    #basic-addon2 {
        background: none;
        border: none;
    }

`;

