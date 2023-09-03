import { RefObject } from 'react'
import { styled } from 'styled-components'
import { IAbility, ISlotValue } from '../data/models'
import Ability from './Ability'

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
            {abilities.map((ability) => (
                <Ability
                    key={`${skill}-${ability.id}`}
                    ability={ability}
                    setSlots={setSlots}
                    slotsRef={slotsRef}
                />
            ))}
        </Wrapper>
    )
}

export default AbilityList
