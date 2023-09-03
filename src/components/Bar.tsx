import { styled } from 'styled-components'
import { RefObject } from 'react'

import removeValueAtIndex from '../utilities/removeValueAtIndex'
import replaceValueAtIndex from '../utilities/replaceValueAtIndex'

import Slot from './Slot'

import { TrashIcon, RefreshIcon, ChevronUp, ChevronDown } from '../vectors/vectors'

import { ISlotValue } from '../data/models'
import swapValuesAtIndexes from '../utilities/swapValuesAtIndexes'

const Wrapper = styled.section`
    width: fit-content;
    background-color: #071b25;
    border-width: 1px;
    border-style: solid;
    border-bottom-color: black;
    border-right-color: black;
    border-left-color: #39444b;
    border-top-color: #39444b;
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

const Button = styled.button`
    appearance: none;
    background-color: #16232b;
    border-width: 1px;
    border-style: solid;
    border-bottom-color: black;
    border-right-color: black;
    border-left-color: #39444b;
    border-top-color: #39444b;
    color: #e1bb34;
    box-sizing: border-box;
    width: 2rem;
    height: 2rem;
    cursor: pointer;

    svg {
        width: 1rem;
        height: 1rem;
        object-fit: contain;
    }
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
                        <Button onClick={onClickUp}>
                            <ChevronUp />
                        </Button>
                    )}
                    {slotsRef.current && slotsRef.current.length - 1 === id ? (
                        <span></span>
                    ) : (
                        <Button onClick={onClickDown}>
                            <ChevronDown />
                        </Button>
                    )}
                </ButtonGroup>
            )}
            <Slots>
                {slots.map((slot, index) => (
                    <Slot key={`bar${id}-slot${index}`} ability={slot} bar={id} index={index} />
                ))}
            </Slots>
            <ButtonGroup>
                <Button onClick={onClickReset}>
                    <RefreshIcon />
                </Button>
                {total == 1 ? null : (
                    <Button onClick={onClickDelete}>
                        <TrashIcon />
                    </Button>
                )}
            </ButtonGroup>
        </Wrapper>
    )
}

export default Bar
