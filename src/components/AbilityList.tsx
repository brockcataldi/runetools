import { styled } from 'styled-components'

import Ability from './Ability'

import { IAbility, IHasSlotsData } from '../data/models'

const Wrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(6, 32px);
    gap: 1rem;
    width: 274px;
    margin: 0 auto;
`

interface IAbilityListProps extends IHasSlotsData {
    abilities: IAbility[]
    skill: string
}

const AbilityList = ({ abilities, skill, ...props }: IAbilityListProps) => {
    return (
        <Wrapper>
            {abilities.map((ability, index) => (
                <Ability
                    key={`${skill}-${ability.id}`}
                    $frame={true}
                    ability={ability}
                    bar={null}
                    index={index}
                    {...props}
                />
            ))}
        </Wrapper>
    )
}

export default AbilityList
