import { useLayoutEffect, useRef, RefObject } from 'react'
import { styled } from 'styled-components'
import { useRecoilValue } from 'recoil'
import { gsap } from 'gsap'

import { capitalize } from '../utilities/Utilities'

import Accordion from './Accordion'
import AbilityList from './AbilityList'
import AsideFilter from './AsideFilter'

import { IAbilityMap, ISlotValue } from '../data/models'

import { currentDragParentAtom, filteredAbilitiesSelector } from '../data/atoms'

const Wrapper = styled.aside`
    position: fixed;
    width: 20rem;
    height: calc(100vh - 74px);
    top: 74px;
    left: 0;
    background-color: var(--color-background-50);
    box-shadow: -2px 0px 3px black;
    z-index: 1;
    overflow-y: auto;
`

const Header = styled.header`
    padding: 0.75rem 1rem;
`

const Title = styled.h2`
    font-size: 1.5rem;
    font-weight: 700;
    font-family: 'Cinzel', serif;
    color: var(--color-text-50);
    display: block;
    margin: 0 0 0.5rem 0;
`

interface IAsideProps {
    slotsRef: RefObject<ISlotValue[][]>
    setSlots: (slots: ISlotValue[][]) => void
}

const Aside = ({ slotsRef, setSlots }: IAsideProps) => {
    const ref = useRef<HTMLElement>(null)
    const abilities = useRecoilValue<IAbilityMap>(filteredAbilitiesSelector)
    const dragParent = useRecoilValue<string | null>(currentDragParentAtom)

    useLayoutEffect(() => {
        if (!ref.current) {
            return
        }

        if (dragParent === null) {
            gsap.set(ref.current, {
                y: 0,
                overflow: 'auto',
            })
        } else {
            const { scrollTop } = ref.current

            gsap.set(ref.current, {
                y: -scrollTop,
                overflow: 'visible',
            })
        }
    }, [dragParent])

    return (
        <Wrapper ref={ref}>
            <Header>
                <Title>Abilities</Title>
                <AsideFilter />
            </Header>

            {Object.keys(abilities).map((key) => {
                return (
                    <Accordion
                        key={`accordion-${key}`}
                        title={capitalize(key)}
                        icon={`/menu-items/${key}_abilities_icon.webp`}
                        $current={dragParent === key}
                    >
                        <AbilityList
                            skill={key}
                            abilities={abilities[key]}
                            setSlots={setSlots}
                            slotsRef={slotsRef}
                        />
                    </Accordion>
                )
            })}
        </Wrapper>
    )
}

export default Aside
