import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`


:root {
    //PRIMARY COLORS
    --color-primary: 255, 109, 0;       //#ff6d00
    --color-prim-hover: 255, 121, 0;    //#ff7900
    //GREY SCALE
    --grey-0 : 248, 249, 250;           //#f8f9fa
    --grey-1 : 222, 226, 230;           //#dee2e6
    --grey-2 : 173, 181, 189;           //#adb5bd
    --grey-3 : 73, 80, 87;              //#495057
    --grey-4 : 33, 37, 41;              //#212529
    --grey-5 : 22, 26, 29;              //#161a1d
    
}

* {
    padding: 0;
    border: none;
    margin: 0;
    box-sizing: border-box;
    list-style: none;
    font-family: 'Open Sans', sans-serif;
}

body {
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    overflow-y: auto;
    background: rgb(var(--grey-0));
}

#__next {
    width: 100%;
    height: 100%;
}

button {
    background: rgb(var(--color-primary));
    font-size: 1rem;
    padding: 0.8rem 2.5rem;
    border-radius: 0.3rem;
    cursor: pointer;
    font-weight: 600;
    transition: 1s;
    
    &:hover {
        background: rgb(var(--color-prim-hover));
    }
    
}
`;

export default GlobalStyle;
