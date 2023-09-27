
import Ability from '../Ability/Ability'

import { IAbility, IHasSlotsData } from '../../data/models'

import { Wrapper } from './AbilityList.elements'

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
