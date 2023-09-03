import { styled } from 'styled-components'

import useRecoilStateRef from './utilities/useRecoilStateRef'

import Aside from './components/Aside'
import Bar from './components/Bar'

import { PlusIcon } from './vectors/vectors'

import { barsAtom } from './data/atoms'
import { ISlotValue } from './data/models'

// Colors
// #16232b - Background 10
// #071b25 - Background 50
// #010b10 - Background 100

const Container = styled.div``
const Main = styled.main`
    position: absolute;
    top: 0;
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
