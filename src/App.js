import React, { useState } from "react";
import "./App.css";

import { TypeAnimation } from "react-type-animation";
import styled, { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./GlobalStyle";
import { lightTheme, darkTheme } from "./Themes";
import me from "./me.JPEG";

const Container = styled.div`
    display: grid;
    grid-auto-flow: row;
    grid-template-rows: max-content;
    align-items: center;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
`;

const NavBar = styled.div`
    width: 100%;
    padding: 1rem 2rem;
    box-sizing: border-box;

    display: grid;
    grid-auto-flow: row;
    grid-gap: 0.5rem;
    justify-content: end;
    justify-items: end;

    transition: all 0.2s ease-in-out;

    @media only screen and (max-width: 768px) {
        background-color: ${({ theme }) => theme.background};
    }

    i {
        display: block;
        margin-top: -5px;
    }
`;

const StyledSectionContainer = styled.div`
    width: 100%;
    display: grid;
    grid-auto-flow: column;
    grid-template-columns: 1fr 10fr 1fr;
    align-items: center;
    justify-items: center;
`;

const Section = styled.div`
    margin: 0 10%;
    display: flex;
    flex-direction: column;
    justify-content: center;

    .grid {
        display: grid;
        grid-auto-flow: column;
        grid-template-columns: max-content;
        grid-gap: 0.5rem;
        align-items: center;
    }

    h1 {
        font-size: 3.5rem;
    }

    h2 {
        font-size: 2.5rem;
        font-weight: 700;
        color: ${({ theme }) => theme.accent};
    }

    .line {
        content: "";
        display: block;
        width: 100%;
        height: 6px;
        border-radius: 1rem;
        background-color: ${({ theme }) => theme.accent};
    }

    .name {
        font-weight: 700;
        transition: all 0.2s ease-in-out;
        z-index: 0;
        color: ${({ theme }) => theme.accent};
    }

    .name::after {
        content: "";
        display: inline-block;
        height: 3rem;
        width: 0.3rem;
        margin-left: 0.5rem;
        background-color: ${({ theme }) => theme.accent};
    }

    .about {
        @media only screen and (max-width: 768px) {
            display: flex;
            flex-direction: column;
            align-items: center;
        }

        @media only screen and (min-width: 768px) {
            display: grid;
            grid-auto-flow: column;
            grid-gap: 2rem;
            align-items: center;
        }
    }

    strong {
        color: ${({ theme }) => theme.accent};
    }

    img {
        width: 256px;
        border-radius: 50%;
        padding: 0;
        box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2);
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
    cursor: pointer;
`;

const NavLink = styled.a`
    cursor: pointer;
`;

const SectionContainer = ({ children, handleChangePage, to, from }) => {
    return (
        <StyledSectionContainer>
            <IconLink onClick={() => handleChangePage(from)}>
                <i className="bi bi-chevron-left" />
            </IconLink>
            {children}
            <IconLink onClick={() => handleChangePage(to)}>
                <i className="bi bi-chevron-right" />
            </IconLink>
        </StyledSectionContainer>
    );
};

const Main = ({ handleChangePage }) => (
    <SectionContainer
        handleChangePage={handleChangePage}
        to="About"
        from="Projects"
    >
        <Section>
            <h1>
                hi, my name is{" "}
                <TypeAnimation
                    sequence={["patricia"]}
                    wrapper="span"
                    cursor={true}
                    repeat={1}
                    className="name"
                />
            </h1>
            I am a new graduate with a bachelor's in software engineering from
            the University of Alberta
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
    </SectionContainer>
);

const About = ({ handleChangePage }) => (
    <SectionContainer
        handleChangePage={handleChangePage}
        to="Skills"
        from="Main"
    >
        <Section>
            <div className="grid">
                <h2>about me</h2>
                <span className="line" />
            </div>
            <div className="about">
                <p>
                    Hey there! My name is <strong>Patricia Zafra</strong>.
                    Growing up, I've always had a strong interest in computers.
                    I watched and experienced the growth of the Internet and
                    social media age. This interest in computers eventually led
                    me to study software engineering at the University of
                    Alberta, where I studied topics such object-oriented
                    programming, database management, web-based systems,
                    software requirements engineering, embedded systems, and
                    more. I am passionate and most interested in full-stack web
                    development and human-computer interaction.
                    <br />
                    <br />
                    Outside of programming, I also have various hobbies in the
                    arts such as drawing, painting, and playing and creating
                    music.
                </p>
                <img alt="Me" src={me} />
            </div>
        </Section>
    </SectionContainer>
);

const Skills = ({ handleChangePage }) => (
    <SectionContainer
        handleChangePage={handleChangePage}
        to="Projects"
        from="About"
    >
        <Section>
            <div className="grid">
                <h2>skills</h2>
                <span className="line" />
            </div>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                vehicula magna commodo arcu pulvinar ultricies. Curabitur in
                lectus viverra, finibus purus eu, fringilla nibh. Nam vulputate,
                arcu vitae venenatis mollis, neque enim pellentesque neque, vel
                sagittis risus nisi ut dui. Suspendisse vestibulum leo semper,
                consectetur odio non, finibus tortor. Morbi tincidunt, elit
                vitae molestie aliquet, nisl tellus aliquet enim, id maximus
                augue justo id lorem. Pellentesque eu sollicitudin urna. Etiam
                ut tortor id orci accumsan consequat ultricies sed velit.
                Curabitur ante sem, tempus vitae rhoncus et, fringilla sit amet
                urna.
            </p>
        </Section>
    </SectionContainer>
);
const Projects = ({ handleChangePage }) => (
    <SectionContainer
        handleChangePage={handleChangePage}
        to="Main"
        from="Skills"
    >
        <Section>
            <div className="grid">
                <h2>projects</h2>
                <span className="line" />
            </div>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                vehicula magna commodo arcu pulvinar ultricies. Curabitur in
                lectus viverra, finibus purus eu, fringilla nibh. Nam vulputate,
                arcu vitae venenatis mollis, neque enim pellentesque neque, vel
                sagittis risus nisi ut dui. Suspendisse vestibulum leo semper,
                consectetur odio non, finibus tortor. Morbi tincidunt, elit
                vitae molestie aliquet, nisl tellus aliquet enim, id maximus
                augue justo id lorem. Pellentesque eu sollicitudin urna. Etiam
                ut tortor id orci accumsan consequat ultricies sed velit.
                Curabitur ante sem, tempus vitae rhoncus et, fringilla sit amet
                urna.
            </p>
        </Section>
    </SectionContainer>
);

function App() {
    const [darkMode, setDarkMode] = useState(
        window.matchMedia("prefers-color-scheme: dark").matches
    );
    const [showComponent, setShowComponent] = useState("Main");

    const handleChangePage = (to) => {
        setShowComponent(to);
    };

    return (
        <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
            <GlobalStyle />
            <Container>
                <NavBar>
                    <button onClick={() => setDarkMode(!darkMode)}>
                        <i
                            className={`bi bi-brightness-high${
                                darkMode ? "-fill" : ""
                            }`}
                        />
                    </button>
                    <NavLink onClick={() => handleChangePage("About")}>
                        /about
                    </NavLink>
                    <NavLink onClick={() => handleChangePage("Skills")}>
                        /skills
                    </NavLink>
                    <NavLink onClick={() => handleChangePage("Projects")}>
                        /projects
                    </NavLink>
                </NavBar>
                {showComponent === "Main" && (
                    <Main handleChangePage={handleChangePage} />
                )}
                {showComponent === "About" && (
                    <About handleChangePage={handleChangePage} />
                )}
                {showComponent === "Skills" && (
                    <Skills handleChangePage={handleChangePage} />
                )}
                {showComponent === "Projects" && (
                    <Projects handleChangePage={handleChangePage} />
                )}
            </Container>
        </ThemeProvider>
    );
}

export default App;
