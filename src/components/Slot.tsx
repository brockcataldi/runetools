import { RefObject } from 'react'
import { styled } from 'styled-components'

import { ISlotValue } from '../data/models'
import Ability from './Ability'

const Wrapper = styled.button`
    width: 42px;
    height: 42px;
    display: block;
    box-sizing: border-box;
    padding: 0;
    border: 1px solid #39444b;
    box-shadow: inset 0 0 8px 3px rgba(0, 0, 0, 0.25);
    background-color: transparent;
`

interface ISlotProps {
    ability: ISlotValue
    bar: number
    index: number
    slotsRef: RefObject<ISlotValue[][]>
    setSlots: (slots: ISlotValue[][]) => void
}

const Slot = ({ ability, bar, index, setSlots, slotsRef }: ISlotProps) => {
    return (
        <Wrapper className={`slot sid-${bar}-${index}`}>
            {ability === null ? null : (
                <Ability
                    $frame={false}
                    $size={'large'}
                    ability={ability}
                    bar={bar}
                    index={index}
                    inSlot={true}
                    setSlots={setSlots}
                    slotsRef={slotsRef}
                />
            )}
        </Wrapper>
    )
}

export default Slot
