import { styled } from 'styled-components'

import useRecoilStateRef from './utilities/useRecoilStateRef'

import Aside from './components/Aside'
import Bar from './components/Bar'

import { PlusIcon, ShareIcon } from './vectors/vectors'

import { barsAtom } from './data/atoms'
import { ISlotValue } from './data/models'

// Colors
// #16232b - Background 10
// #071b25 - Background 50
// #010b10 - Background 100

const Container = styled.div``

const Header = styled.header`
    position: fixed;
    box-sizing: border-box;
    width: 100%;
    padding: 1rem;
    z-index: 3;
    background-color: #071b25;
    top: 0;
    left: 0;
    box-shadow: 0px 2px 3px black;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const HeaderTitle = styled.h1`
    font-size: 1.5rem;
    font-weight: 700;
    font-family: 'Cinzel', serif;
    color: #e1bb34;
    display: block;
    margin: 0;
    margin: 0;
`

const HeaderButton = styled.button`
    appearance: none;
    background-color: #16232b;
    border-width: 1px;
    border-style: solid;
    border-bottom-color: black;
    border-right-color: black;
    border-left-color: #39444b;
    border-top-color: #39444b;
    color: #e1bb34;
    box-sizing: border-box;
    padding: 0.5rem 1rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 0.75rem;
    cursor: pointer;

    svg {
        width: 1.25rem;
        height: 1.25rem;
    }
`

const Main = styled.main`
    position: absolute;
    top: 74px;
    left: 0;
    right: 20rem;
    bottom: 0;
    background-color: #010b10;
    z-index: 0;
    display: grid;
    place-items: center;
`

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 1rem;
`

const Button = styled.button`
    appearance: none;
    background-color: #071b25;
    border-width: 1px;
    border-style: solid;
    border-bottom-color: black;
    border-right-color: black;
    border-left-color: #39444b;
    border-top-color: #39444b;
    color: #e1bb34;
    box-sizing: border-box;
    padding: 0.5rem 1rem;
    display: flex;
    gap: 0.5rem;
    cursor: pointer;
`

const ButtonText = styled.span`
    font-size: 1rem;
    font-weight: 700;
    font-family: 'Cinzel', serif;
    color: #e1bb34;
    display: block;
    margin: 0;
`

const App = () => {
    const [bars, setBars, barsRef] = useRecoilStateRef<ISlotValue[][]>(barsAtom)

    const onClick = () => {
        setBars([...bars, new Array(14).fill(null)])
    }

    return (
        <Container>
            <Header>
                <HeaderTitle>RuneTools</HeaderTitle>
                <HeaderButton>
                    <ShareIcon />
                    <ButtonText>Share</ButtonText>
                </HeaderButton>
            </Header>
            <Main>
                <Wrapper>
                    {bars.map((slots, index) => (
                        <Bar
                            key={`bar-${index}`}
                            id={index}
                            slots={slots}
                            total={bars.length}
                            setSlots={setBars}
                            slotsRef={barsRef}
                        />
                    ))}
                    {bars.length < 5 ? (
                        <Button onClick={onClick}>
                            <PlusIcon />
                            <ButtonText>Add Another</ButtonText>
                        </Button>
                    ) : null}
                </Wrapper>
            </Main>
            <Aside setSlots={setBars} slotsRef={barsRef} />
        </Container>
    )
}

export default App
