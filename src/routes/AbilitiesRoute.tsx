import { styled } from 'styled-components'
import { useSearchParams } from 'react-router-dom'
import { useEffect } from 'react'
import { useRecoilValue } from 'recoil'

import Aside from '../components/Aside'
import Bar from '../components/Bar'
import Header from '../components/Header'
import Button from '../components/Button'

import { PlusIcon, ShareIcon } from '../vectors/vectors'

import { fromStorable, toStorable, useStateRef } from '../utilities/Utilities'

import { abilitiesAtom, abilitiesTypes } from '../data/atoms'
import { ISlotValue } from '../data/models'

const Container = styled.div``

const Main = styled.main`
    position: absolute;
    top: 74px;
    left: 0;
    right: 20rem;
    bottom: 0;
    background-color: var(--color-background-30);
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

const AbilitiesRoute = () => {
    const types = useRecoilValue(abilitiesTypes)
    const abilities = useRecoilValue(abilitiesAtom)
    const [search, setSearch] = useSearchParams()

    const [bars, setBars, barsRef] = useStateRef<ISlotValue[][]>(
        fromStorable(search.get('d'), types, abilities),
    )

    useEffect(() => {
        setSearch({
            d: toStorable(bars, types),
        })
    }, [bars])

    const onClickAdd = () => {
        setBars([...bars, new Array(14).fill(null)])
    }

    const onClickShare = () => {
        console.log('share clicked')
    }

    return (
        <Container>
            <Header>
                <Button
                    icon={ShareIcon}
                    text={'Share'}
                    onClick={onClickShare}
                    $background={'light'}
                />
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
                        <Button icon={PlusIcon} text={'Add Another'} onClick={onClickAdd} />
                    ) : null}
                </Wrapper>
            </Main>
            <Aside setSlots={setBars} slotsRef={barsRef} />
        </Container>
    )
}

export default AbilitiesRoute
