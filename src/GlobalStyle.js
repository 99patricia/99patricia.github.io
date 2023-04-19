import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    body {
        background-color: ${({ theme }) => theme.background};
        transition: all 0.2s ease-in-out;
        text-align: justify;
    }

    body, a {
        color: ${({ theme }) => theme.text};
        font-family: var(--font);
        font-weight: 300;
    }
`;
