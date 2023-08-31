import { styled } from 'styled-components'
import { IAbility } from '../models'

const Wrapper = styled.picture`
  width: 30px;
  height: 30px;
  display: block;
  border: 1px solid #39444b;
`

const Image = styled.img``

interface IAbilityProps {
  ability: IAbility
}

const Ability = ({ ability}: IAbilityProps) => {
  return (
    <Wrapper>
      <Image src={`/abilities/${ability.image}`} alt={ability.ability} />
    </Wrapper>
  )
}

export default Ability
