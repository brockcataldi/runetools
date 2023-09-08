import { useLayoutEffect, useRef, RefObject } from 'react'
import { styled } from 'styled-components'
import { gsap } from 'gsap'
import { Draggable } from 'gsap/Draggable'
import { useSetRecoilState } from 'recoil'

import {
    getClassStartsWith,
    replaceValueAtIndex2D,
    swapValuesAtIndexes2D,
} from '../utilities/Utilities'

import { IAbility, ISlotValue } from '../data/models'
import { currentDragParentAtom } from '../data/atoms'

interface IAbilitySizeProps {
    $size?: 'small' | 'large'
}

interface IAbilityWrapperProps extends IAbilitySizeProps {
    $frame: boolean
}

const Wrapper = styled.div<IAbilityWrapperProps>`
    display: block;
    box-sizing: border-box;
    padding: 0;

    ${({ $size, $frame }) => {
        if ($size === 'large') {
            return `
                border: ${$frame ? '1px solid #39444b' : 'none'} 
                width: ${$frame ? '42px' : '40px'};
                height: ${$frame ? '42px' : '40px'};
            `
        }

        return `
            width: ${$frame ? '32px' : '30px'};
            height: ${$frame ? '32px' : '30px'};
        `
    }}
`

const Image = styled.img<IAbilitySizeProps>`
    display: block;
    object-fit: contain;

    ${({ $size }) => {
        if ($size === 'large') {
            return `
                width: 40px;
                height: 40px;
            `
        }

        return `
            width: 30px;
            height: 30px;
        `
    }}
`

interface IAbilityProps extends IAbilityWrapperProps {
    inSlot: boolean
    bar: number | null
    index: number
    ability: IAbility
    slotsRef: RefObject<ISlotValue[][]>
    setSlots: (slots: ISlotValue[][]) => void
}

const Ability = ({
    ability,
    $size = 'small',
    $frame,
    inSlot,
    setSlots,
    slotsRef,
    bar,
    index,
}: IAbilityProps) => {
    const elementRef = useRef<HTMLDivElement>(null)
    const draggableInstance = useRef<Draggable[] | null>(null)

    const setCurrentDragParent = useSetRecoilState(currentDragParentAtom)

    const testSlot = (slot: Element) => {
        if (!Draggable.hitTest(elementRef.current, slot, 20) || !slotsRef.current) {
            return
        }

        const targetSid = getClassStartsWith(slot.classList, 'sid')

        if (targetSid === false) {
            return
        }

        const [, targetBarString, targetIndexString]: string[] = targetSid.split('-')

        const targetBar: number = Number(targetBarString)
        const targetIndex: number = Number(targetIndexString)

        if (inSlot && bar !== null) {
            setSlots(swapValuesAtIndexes2D(slotsRef.current, targetIndex, targetBar, index, bar))
        } else {
            setSlots(replaceValueAtIndex2D(slotsRef.current, ability, targetIndex, targetBar))
        }
    }

    const onDragEnd = () => {
        if (!elementRef.current) {
            return
        }

        const slotElements = document.querySelectorAll('.slot')

        if (slotElements === null) {
            return
        }

        slotElements.forEach(testSlot)

        gsap.set(elementRef.current, {
            x: 0,
            y: 0,
        })

        setCurrentDragParent(null)
    }

    const onDragStart = () => {
        setCurrentDragParent(ability.skill)
    }

    useLayoutEffect(() => {
        draggableInstance.current = Draggable.create(elementRef.current, {
            type: 'x,y',
            onDragEnd: onDragEnd,
            onDragStart: onDragStart,
        })

        return () => {
            if (draggableInstance.current === null) {
                return
            }

            draggableInstance.current[0].kill()
        }
    }, [])

    return (
        <Wrapper $size={$size} $frame={$frame} ref={elementRef}>
            <Image $size={$size} src={`/abilities/${ability.image}`} alt={ability.ability} />
        </Wrapper>
    )
}

export default Ability
