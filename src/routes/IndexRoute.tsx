import { styled } from 'styled-components'

import LinkButton from '../components/LinkButton/LinkButton'

const Container = styled.main`
    display: grid;
    place-items: center;
    height: 100vh;
    width: 100%;
    background: linear-gradient(
        0.25turn,
        var(--osrs-color-background-30),
        var(--rs3-color-background-30)
    );
`

const Wrapper = styled.div`
    max-width: 400px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 100vh;
    width: 100%;
`

const Title = styled.h1`
    font-size: 4rem;
    font-weight: 700;
    font-family: 'Cinzel', serif;
    margin: 0 0 1rem;
    text-align: left;
    color: var(--rs3-color-text-50);
`

const Deck = styled.nav``

const IndexRoute = () => {
    return (
        <Container>
            <Wrapper>
                <Title>Rune Tools</Title>
                <p style={{ color: '#ffffff' }}>I know the Index page sucks, I'm working on it</p>
                <Deck>
                    <LinkButton
                        $style={'osrs'}
                        $background={'dark'}
                        href='osrs/preset'
                        text={'Preset'}
                        icon={'/rs3/menu-items/powers_icon.webp'}
                    />
                    <LinkButton
                        $style={'rs3'}
                        href='rs3/action-bar/'
                        text={'Action Bar Planner'}
                        icon={'/rs3/menu-items/powers_icon.webp'}
                    />
                </Deck>
            </Wrapper>
        </Container>
    )
}

export default IndexRoute
