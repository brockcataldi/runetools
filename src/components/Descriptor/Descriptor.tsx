import { IIcon } from '../../data/models'

import { Wrapper, Image, Text } from './Descriptor.elements'

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
