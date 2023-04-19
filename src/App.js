import React, { useEffect, useState } from "react";
import "./App.css";

import styled, { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./GlobalStyle";
import { lightTheme, darkTheme } from "./Themes";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0 10%;
`;

const NavBar = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    padding: 2rem;
    box-sizing: border-box;

    display: grid;
    grid-auto-flow: column;
    grid-gap: 0.5rem;
    justify-content: end;
`;

const Section = styled.section`
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;

    h3 {
        font-size: 5rem;
        font-weight: 300;
        margin: 2rem 0;
    }

    .name {
        color: #b05279;
    }
`;

const LinkContainer = styled.div`
    display: grid;
    grid-auto-flow: column;
    grid-gap: 0.5rem;
    justify-content: start;
`;

const IconLink = styled.a`
    font-size: 1.5rem;
`;

const ScrollToTop = styled.a`
    font-size: 3rem;
    position: fixed;
    bottom: 1rem;
    right: 1rem;
    transition: all 0.2s ease-in-out;

    opacity: ${(props) => (props.showScrollToTop ? "1" : "0")};
`;

function App() {
    const [darkMode, setDarkMode] = useState(
        window.matchMedia("(prefers-color-scheme: dark)").matches
    );

    const [showScrollToTop, setShowScrollToTop] = useState(false);

    useEffect(() => {
        const handleScrollToTopVisibility = () => {
            window.pageYOffset > 300
                ? setShowScrollToTop(true)
                : setShowScrollToTop(false);
        };

        window.addEventListener("scroll", handleScrollToTopVisibility);

        return () => {
            window.removeEventListener("scroll", () => {});
        };
    }, []);

    return (
        <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
            <GlobalStyle />
            <NavBar>
                <a href="#about">about me</a>
                <a href="#about">skills</a>
                <a href="#about">projects</a>
                <button onClick={() => setDarkMode(!darkMode)}>
                    <i
                        className={`bi bi-brightness-high${
                            darkMode ? "-fill" : ""
                        }`}
                    />
                </button>
            </NavBar>
            <Container>
                <Section id="main">
                    <h3>
                        hi! i'm <span className="name">patricia</span>.
                    </h3>
                    <p>
                        I am a new graduate with a bachelor's in software
                        engineering from the University of Alberta.
                    </p>
                    <LinkContainer>
                        <IconLink href="https://github.com/99patricia/">
                            <i className="bi bi-github"></i>
                        </IconLink>
                        <IconLink href="https://www.linkedin.com/in/zafrapatricia/">
                            <i className="bi bi-linkedin"></i>
                        </IconLink>
                        <IconLink href="mailto:pzafra@ualberta.ca">
                            <i className="bi bi-envelope-fill"></i>
                        </IconLink>
                    </LinkContainer>
                </Section>
                <Section id="about">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Vivamus vehicula magna commodo arcu pulvinar ultricies.
                    Curabitur in lectus viverra, finibus purus eu, fringilla
                    nibh. Nam vulputate, arcu vitae venenatis mollis, neque enim
                    pellentesque neque, vel sagittis risus nisi ut dui.
                    Suspendisse vestibulum leo semper, consectetur odio non,
                    finibus tortor. Morbi tincidunt, elit vitae molestie
                    aliquet, nisl tellus aliquet enim, id maximus augue justo id
                    lorem. Pellentesque eu sollicitudin urna. Etiam ut tortor id
                    orci accumsan consequat ultricies sed velit. Curabitur ante
                    sem, tempus vitae rhoncus et, fringilla sit amet urna.
                </Section>
                <ScrollToTop showScrollToTop={showScrollToTop} href="#main">
                    <i className="bi bi-arrow-up-circle-fill"></i>
                </ScrollToTop>
            </Container>
        </ThemeProvider>
    );
}

export default App;
