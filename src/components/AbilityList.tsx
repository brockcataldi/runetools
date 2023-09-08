import { RefObject } from 'react'
import { styled } from 'styled-components'

import Ability from './Ability'

import { IAbility, ISlotValue } from '../data/models'

const Wrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(6, 32px);
    gap: 1rem;
    width: 274px;
    margin: 0 auto;
`

interface IAbilityListProps {
    abilities: IAbility[]
    skill: string
    slotsRef: RefObject<ISlotValue[][]>
    setSlots: (slots: ISlotValue[][]) => void
}

const AbilityList = ({ abilities, skill, slotsRef, setSlots }: IAbilityListProps) => {
    return (
        <Wrapper>
            {abilities.map((ability, index) => (
                <Ability
                    key={`${skill}-${ability.id}`}
                    $frame={true}
                    ability={ability}
                    bar={null}
                    index={index}
                    inSlot={false}
                    setSlots={setSlots}
                    slotsRef={slotsRef}
                />
            ))}
        </Wrapper>
    )
}

export default AbilityList
