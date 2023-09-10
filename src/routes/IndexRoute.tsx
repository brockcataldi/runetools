import { styled } from 'styled-components'

const Container = styled.main`
    max-width: 750px;
    margin: 0 auto;
    display: grid;
    place-items: center;
    height: 100vh;
`

const Wrapper = styled.div``

const Title = styled.h1`
    font-size: 4rem;
    font-weight: 700;
    font-family: 'Cinzel', serif;
    color: var(--color-text-50);
    margin: 0 0 1rem;
    text-align: center;
`

const Link = styled.a`
    color: white;
`

const IndexRoute = () => {
    return (
        <Container>
            <Wrapper>
                <Title>RuneTools</Title>
                <Link href={'/abilities/'}>Abilities</Link>
            </Wrapper>
        </Container>
    )
}

export default IndexRoute
