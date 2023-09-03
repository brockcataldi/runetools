import { useLayoutEffect, useRef, RefObject } from 'react'
import { styled } from 'styled-components'
import { gsap } from 'gsap'
import { Draggable } from 'gsap/Draggable'
import { useSetRecoilState } from 'recoil'

import getClassStartsWith from '../utilities/getClassStartsWith'
import replaceValueAtIndex from '../utilities/replaceValueAtIndex'

import { IAbility, ISlotValue } from '../data/models'
import { currentDragParentAtom } from '../data/atoms'

const Wrapper = styled.div`
    width: 32px;
    height: 32px;
    display: block;
    box-sizing: border-box;
    padding: 0;
    border: 1px solid #39444b;
`

const Image = styled.img`
    width: 30px;
    height: 30px;
    display: block;
    object-fit: contain;
`

interface IAbilityProps {
    ability: IAbility
    slotsRef: RefObject<ISlotValue[][]>
    setSlots: (slots: ISlotValue[][]) => void
}

const Ability = ({ ability, setSlots, slotsRef }: IAbilityProps) => {
    const ref = useRef<HTMLDivElement>(null)
    const instance = useRef<Draggable[] | null>(null)

    const setCurrentDragParent = useSetRecoilState(currentDragParentAtom)

    const updateSlot = (bars: ISlotValue[][], ability: ISlotValue, bar: number, index: number) => {
        setSlots(
            replaceValueAtIndex<ISlotValue[]>(
                bars,
                replaceValueAtIndex<ISlotValue>(bars[bar], ability, index),
                bar,
            ),
        )
    }

    const testSlot = (slot: Element) => {
        if (!Draggable.hitTest(ref.current, slot, 20) || !slotsRef.current) {
            return
        }

        const sid = getClassStartsWith(slot.classList, 'sid')

        if (sid === false) {
            return
        }

        const [, barString, indexString]: string[] = sid.split('-')

        const bar: number = Number(barString)
        const index: number = Number(indexString)

        updateSlot(slotsRef.current, ability, bar, index)
    }

    const onDragEnd = () => {
        if (!ref.current) {
            return
        }

        const slotElements = document.querySelectorAll('.slot')

        if (slotElements === null) {
            return
        }

        slotElements.forEach(testSlot)

        gsap.set(ref.current, {
            x: 0,
            y: 0,
        })

        setCurrentDragParent(null)
    }

    const onDragStart = () => {
        setCurrentDragParent(ability.skill)
    }

    useLayoutEffect(() => {
        instance.current = Draggable.create(ref.current, {
            type: 'x,y',
            onDragEnd: onDragEnd,
            onDragStart: onDragStart,
        })

        return () => {
            if (instance.current === null) {
                return
            }

            instance.current[0].kill()
        }
    }, [])

    return (
        <Wrapper ref={ref}>
            <Image src={`/abilities/${ability.image}`} alt={ability.ability} />
        </Wrapper>
    )
}

export default Ability
