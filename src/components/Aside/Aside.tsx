import { useLayoutEffect, useRef, RefObject } from 'react'
import { useRecoilValue } from 'recoil'
import { gsap } from 'gsap'

import { capitalize } from '../../utilities/Utilities'

import { Wrapper, Header, Title } from './Aside.elements'
import Accordion from '../Accordion/Accordion'
import AbilityList from '../AbilityList/AbilityList'
import AsideFilter from '../AsideFilter/AsideFilter'

import { IAbilityMap, ISlotValue } from '../../data/models'

import { currentDragParentAtom, filteredAbilitiesSelector } from '../../data/atoms'


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

    const handleAccordionOpen = (panelRef: RefObject<HTMLDivElement>) => {
        if (!panelRef.current || !ref.current) {
            return
        }
    }

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
                        onOpen={handleAccordionOpen}
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
