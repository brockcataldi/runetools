import { styled } from 'styled-components'
import { useStateRef } from '../utilities/Utilities';
import { useSearchParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useRecoilValue } from 'recoil';
import { compressToBase64 } from 'lz-string';

import { fromStorable, toStorable } from '../utilities/Utilities';

import Aside from '../components/Aside'
import Bar from '../components/Bar'
import Header from '../components/Header';

import { PlusIcon } from '../vectors/vectors'

import { abilitiesAtom, abilitiesTypes } from '../data/atoms'
import { ISlotValue } from '../data/models'


// Colors
// #16232b - Background 10
// #071b25 - Background 50
// #010b10 - Background 100

const Container = styled.div``

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

const AbilitiesRoute = () => {

    const types = useRecoilValue(abilitiesTypes)
    const abilities = useRecoilValue(abilitiesAtom);
    const [search, setSearch] = useSearchParams();

    const [bars, setBars, barsRef] = useStateRef<ISlotValue[][]>(
        fromStorable(search.get('d'), types, abilities)
    );

    useEffect(() => {
        setSearch(
            { 
                d:  compressToBase64(
                    JSON.stringify(toStorable(bars, types))
                ) 
            }
        )
    }, [bars]);

    const onClick = () => {
        setBars([...bars, new Array(14).fill(null)])
    }

    return (
        <Container>
            <Header />
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

export default AbilitiesRoute
