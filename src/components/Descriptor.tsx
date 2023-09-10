import { styled } from 'styled-components'
import { IIcon } from '../data/models'

const Wrapper = styled.span`
    display: flex;
    gap: 0.5rem;
    align-items: center;
    justify-content: center;
`
const Image = styled.img``
const Text = styled.span``

interface IDescriptorProps {
    icon?: IIcon | string
    alt?: string
    text: string
}

const Descriptor = ({ icon, alt, text }: IDescriptorProps) => {
    const Source = icon

    return (
        <Wrapper>
            {Source !== undefined ? (
                typeof Source === 'string' ? (
                    <Image src={Source} alt={alt !== undefined ? alt : ''} />
                ) : (
                    <Source />
                )
            ) : null}
            <Text>{text}</Text>
        </Wrapper>
    )
}

Descriptor.Wrapper = Wrapper
Descriptor.Text = Text

export default Descriptor
export type { IDescriptorProps }
