import { Wrapper, IWrapperProps } from './LinkButton.elements'
import Descriptor, { IDescriptorProps } from '../Descriptor/Descriptor'

interface ILinkButtonProps extends IDescriptorProps, IWrapperProps {
    href: string
}

const LinkButton = (props: ILinkButtonProps) => {
    const { icon, text, href, ...$styles } = props

    return (
        <Wrapper href={href} {...$styles}>
            <Descriptor icon={icon} text={text} />
        </Wrapper>
    )
}

LinkButton.Wrapper = Wrapper

export default LinkButton
