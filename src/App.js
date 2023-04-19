import "./App.css";
import styled, { ThemeProvider } from "styled-components";

const Container = styled.div`
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0;
`;

const Main = styled.div`
    h3 {
        font-size: 5rem;
        font-weight: 300;
        margin: 2rem 0;
    }

    .name {
        color: var(--secondary);
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

const theme = {
    main: "dark",
};

function App() {
    return (
        <ThemeProvider theme={theme}>
            <Container>
                <Main>
                    <h3>
                        hi! i'm <span className="name">patricia</span>.
                    </h3>
					<p>I've recently completed my bachelor's in software engineering at the University of Alberta.</p>
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
                </Main>
            </Container>
        </ThemeProvider>
    );
}

export default App;
