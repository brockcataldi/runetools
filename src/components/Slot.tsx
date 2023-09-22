import { styled } from 'styled-components'

import { ISlotValue, IHasSlotsData } from '../data/models'
import Ability from './Ability'

const Wrapper = styled.button`
    width: 42px;
    height: 42px;
    display: block;
    box-sizing: border-box;
    padding: 0;
    border: 1px solid var(--color-utility-60);
    box-shadow: inset 0 0 8px 3px rgba(0, 0, 0, 0.25);
    background-color: transparent;
`

interface ISlotProps extends IHasSlotsData {
    ability: ISlotValue
    bar: number
    index: number
}

const Slot = ({ ability, bar, index, ...props }: ISlotProps) => {
    return (
        <Wrapper className={`slot sid-${bar}-${index}`}>
            {ability === null ? null : (
                <Ability
                    $frame={false}
                    $size={'large'}
                    ability={ability}
                    bar={bar}
                    index={index}
                    {...props}
                />
            )}
        </Wrapper>
    )
}

export default Slot
