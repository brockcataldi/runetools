import { ISlotValue, IHasSlotsData } from '../../data/models'

import { Wrapper } from './Slot.elements'

import Ability from '../Ability/Ability'

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
