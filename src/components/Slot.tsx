import { styled } from 'styled-components'

import { IAbility } from '../data/models'

const Wrapper = styled.picture`
    width: 42px;
    height: 42px;
    display: block;
    box-sizing: border-box;
    padding: 0;
    border: 1px solid #39444b;
`

const Image = styled.img`
    width: 40px;
    height: 40px;
    display: block;
    object-fit: contain;
`

interface ISlotProps {
    ability: IAbility | null
    bar: number
    index: number
}

const Slot = ({ ability, bar, index }: ISlotProps) => {
    return (
        <Wrapper className={`slot sid-${bar}-${index}`}>
            {ability === null ? null : (
                <Image src={`/abilities/${ability.image}`} alt={ability.ability} />
            )}
        </Wrapper>
    )
}

export default Slot
