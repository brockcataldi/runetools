import { styled } from 'styled-components'
import { RefObject } from 'react'

import Slot from './Slot'
import Button from './Button'

import {
    removeValueAtIndex,
    replaceValueAtIndex,
    swapValuesAtIndexes,
} from '../utilities/Utilities'

import { TrashIcon, RefreshIcon, ChevronUp, ChevronDown } from '../vectors/vectors'

import { ISlotValue } from '../data/models'

const Wrapper = styled.section`
    width: fit-content;
    background-color: var(--color-background-50);
    border-width: 1px;
    border-style: solid;
    border-bottom-color: var(--color-utility-0);
    border-right-color: var(--color-utility-0);
    border-left-color: var(--color-utility-60);
    border-top-color: var(--color-utility-60);
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0.5rem;
`

const Slots = styled.div`
    display: grid;
    grid-template-columns: repeat(14, 42px);
    gap: 0.5rem;
    margin: 0 1rem;
`

const ButtonGroup = styled.div`
    display: grid;
    grid-template-rows: repeat(2, 1fr);
`

interface IBarProps {
    id: number
    total: number
    slots: ISlotValue[]
    setSlots: (slots: ISlotValue[][]) => void
    slotsRef: RefObject<ISlotValue[][]>
}

const Bar = ({ id, slots, total, setSlots, slotsRef }: IBarProps) => {
    const onClickReset = () => {
        if (!slotsRef.current) {
            return
        }

        setSlots(replaceValueAtIndex<ISlotValue[]>(slotsRef.current, new Array(14).fill(null), id))
    }

    const onClickDelete = () => {
        if (!slotsRef.current) {
            return
        }

        setSlots(removeValueAtIndex<ISlotValue[]>(slotsRef.current, id))
    }

    const onClickUp = () => {
        if (!slotsRef.current) {
            return
        }

        setSlots(swapValuesAtIndexes<ISlotValue[]>(slotsRef.current, id, id - 1))
    }

    const onClickDown = () => {
        if (!slotsRef.current) {
            return
        }

        setSlots(swapValuesAtIndexes<ISlotValue[]>(slotsRef.current, id, id + 1))
    }

    return (
        <Wrapper>
            {total === 1 ? null : (
                <ButtonGroup>
                    {id === 0 ? (
                        <span></span>
                    ) : (
                        <Button
                            onClick={onClickUp}
                            icon={ChevronUp}
                            text={'Shift Bar Up'}
                            $hideText={true}
                            $background={'light'}
                            $padding={'narrow'}
                            $size={'small'}
                        />
                    )}
                    {slotsRef.current && slotsRef.current.length - 1 === id ? (
                        <span></span>
                    ) : (
                        <Button
                            onClick={onClickDown}
                            icon={ChevronDown}
                            text={'Shift Bar Down'}
                            $hideText={true}
                            $background={'light'}
                            $padding={'narrow'}
                            $size={'small'}
                        />
                    )}
                </ButtonGroup>
            )}
            <Slots>
                {slots.map((slot, index) => (
                    <Slot
                        key={`bar${id}-slot${index}`}
                        ability={slot}
                        bar={id}
                        index={index}
                        setSlots={setSlots}
                        slotsRef={slotsRef}
                    />
                ))}
            </Slots>
            <ButtonGroup>
                <Button
                    onClick={onClickReset}
                    icon={RefreshIcon}
                    text={'Reset Bar'}
                    $hideText={true}
                    $background={'light'}
                    $padding={'narrow'}
                    $size={'small'}
                />
                {total == 1 ? null : (
                    <Button
                        onClick={onClickDelete}
                        icon={TrashIcon}
                        text={'Delete Bar'}
                        $hideText={true}
                        $background={'light'}
                        $padding={'narrow'}
                        $size={'small'}
                    />
                )}
            </ButtonGroup>
        </Wrapper>
    )
}

export default Bar
