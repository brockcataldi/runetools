import { styled } from 'styled-components'
import { useSearchParams } from 'react-router-dom'
import { useEffect } from 'react'
import { useRecoilValue } from 'recoil'

import AbilityAside from './components/AbilityAside/AbilityAside'
import ActionBar from './components/ActionBar/ActionBar'
import Header from '../../../components/Header/Header'
import Button from '../../../components/Button/Button'

import { PlusIcon, ShareIcon, SettingsIcon } from '../../../vectors/vectors'

import { fromStorable, toStorable } from './utilities/Utilities'
import { useStateRef } from '../../../utilities/Utilities'

import { abilitiesAtom, abilitiesTypes } from './data/atoms'
import { ISlotValue } from './data/models'

const Container = styled.div``

const Main = styled.main`
    position: absolute;
    top: 74px;
    left: 0;
    right: 20.5rem;
    bottom: 0;
    background-color: var(--rs3-color-background-30);
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

const ActionBarRoute = () => {
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
        navigator.clipboard.writeText(window.location.href)
    }

    return (
        <Container>
            <Header $style={'rs3'}>
                <Button
                    icon={ShareIcon}
                    text={'Share'}
                    onClick={onClickShare}
                    $background={'light'}
                    $style={'rs3'}
                />
                <Button
                    icon={SettingsIcon}
                    text={'Settings'}
                    onClick={onClickShare}
                    $background={'light'}
                    $style={'rs3'}
                />
            </Header>
            <Main>
                <Wrapper>
                    {bars.map((slots, index) => (
                        <ActionBar
                            key={`bar-${index}`}
                            id={index}
                            slots={slots}
                            total={bars.length}
                            setSlots={setBars}
                            slotsRef={barsRef}
                        />
                    ))}
                    {bars.length < 5 ? (
                        <Button
                            icon={PlusIcon}
                            text={'Add Another'}
                            onClick={onClickAdd}
                            $style={'rs3'}
                        />
                    ) : null}
                </Wrapper>
            </Main>
            <AbilityAside setSlots={setBars} slotsRef={barsRef} />
        </Container>
    )
}

export default ActionBarRoute
