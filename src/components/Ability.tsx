import { useLayoutEffect, useRef, RefObject } from 'react'
import { styled } from 'styled-components'
import { gsap } from 'gsap'
import { Draggable } from 'gsap/Draggable'
import { useSetRecoilState } from 'recoil'

import { replaceValueAtIndex2D, swapValuesAtIndexes2D } from '../utilities/Utilities'

import { IAbility, ISlotValue } from '../data/models'
import { currentDragParentAtom } from '../data/atoms'
import getSlotId from '../utilities/getSlotId'

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
    position: static;

    ${({ $size, $frame }) => {
        if ($size === 'large') {
            return `
                border: ${$frame ? '1px solid var(--color-utility-60)' : 'none'};
                width: ${$frame ? '42px' : '40px'};
                height: ${$frame ? '42px' : '40px'};
            `
        }

        return `
            border: ${$frame ? '1px solid var(--color-utility-60)' : 'none'};
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
    bar: number | null
    index: number
    ability: IAbility
    slotsRef: RefObject<ISlotValue[][]>
    setSlots: (slots: ISlotValue[][]) => void
}

const Ability = ({
    $frame,
    $size = 'small',
    ability,
    bar,
    setSlots,
    slotsRef,
    index,
}: IAbilityProps) => {
    const elementRef = useRef<HTMLDivElement>(null)
    const draggableInstance = useRef<Draggable[] | null>(null)
    const setCurrentDragParent = useSetRecoilState(currentDragParentAtom)

    const reset = () => {
        if(elementRef.current){
            gsap.set(elementRef.current, {
                x: 0,
                y: 0,
            })
        }
    }

    const onDragEnd = () => {

        const slotElements = document.querySelectorAll('.slot')

        if (!elementRef.current || !slotsRef.current || !slotElements) {
            return
        }

        const targetSlot = Array.from(slotElements).find((slotElement) =>
            Draggable.hitTest(elementRef.current, slotElement, 20),
        )

        if (targetSlot === undefined) {

            if(bar !== null){
                setSlots(replaceValueAtIndex2D(slotsRef.current, null, index, bar))
                return;
            }

            reset();
            return
        }

        const slotId = getSlotId(targetSlot.classList)

        if (slotId === false) {
            reset();
            return
        }

        const [slotBar, slotIndex] = slotId

        setSlots(
            bar !== null
                ? swapValuesAtIndexes2D(slotsRef.current, slotIndex, slotBar, index, bar)
                : replaceValueAtIndex2D(slotsRef.current, ability, slotIndex, slotBar),
        )
        setCurrentDragParent(null)
        reset();
    }

    const onDragStart = () => {
        if (bar === null) {
            setCurrentDragParent(ability.skill)
        }
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
