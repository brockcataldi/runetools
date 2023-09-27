import { styled } from 'styled-components'
import Descriptor from '../components/Descriptor/Descriptor'

const Container = styled.main`
    max-width: 400px;
    margin: 0 auto;
    display: grid;
    place-items: center;
    height: 100vh;
    width: 100%;
`

const Wrapper = styled.div`
    width: 100%;
    padding: 2rem;
    background-color: var(--color-background-50);
    border-width: 1px;
    border-style: solid;
    border-bottom-color: var(--color-utility-0);
    border-right-color: var(--color-utility-0);
    border-left-color: var(--color-utility-60);
    border-top-color: var(--color-utility-60);
`

const Title = styled.h1`
    font-size: 4rem;
    font-weight: 700;
    font-family: 'Cinzel', serif;
    color: var(--color-text-50);
    margin: 0 0 1rem;
    text-align: left;
`

const Deck = styled.nav``

const Card = styled.a`
    display: block;
    box-sizing: border-box;
    background-color: var(--color-background-70);
    padding: 0.5rem 1rem;
    color: white;
    text-decoration: none;
    border-width: 1px;
    border-style: solid;
    border-bottom-color: var(--color-utility-0);
    border-right-color: var(--color-utility-0);
    border-left-color: var(--color-utility-60);
    border-top-color: var(--color-utility-60);
    position: relative;

    ${Descriptor.Wrapper} {
        gap: 1rem;
        justify-content: flex-start;
    }

    ${Descriptor.Text} {
        font-size: 1.2rem;
        font-weight: 700;
        font-family: 'Cinzel', serif;
        color: var(--color-text-50);
    }
`

const IndexRoute = () => {
    return (
        <Container>
            <Wrapper>
                <Title>Rune Tools</Title>
                <Deck>
                    <Card href={'/action-bar/'}>
                        <Descriptor
                            icon={'/menu-items/powers_icon.webp'}
                            text={'Action Bar Editor'}
                        />
                    </Card>
                </Deck>
            </Wrapper>
        </Container>
    )
}

export default IndexRoute
