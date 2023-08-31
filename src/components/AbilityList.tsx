import { styled } from 'styled-components'
import { IAbility } from '../models'
import Ability from './Ability'

const Wrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(6, 30px);
    gap: 1rem;
    width: 262px;
    margin: 0 auto;
`

interface IAbilityListProps {
  abilities: IAbility[]
  skill: string
}

const AbilityList = ({ abilities, skill }: IAbilityListProps) => {
  return (
    <Wrapper>
      {abilities.map((ability) => (
        <Ability key={`${skill}-${ability.id}`} ability={ability} />
      ))}
    </Wrapper>
  )
}

export default AbilityList
