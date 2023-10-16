import { MouseEvent } from 'react'

import { Wrapper, IWrapperProps } from './Button.elements'
import Descriptor, { IDescriptorProps } from '../Descriptor/Descriptor'

interface IButtonProps extends IDescriptorProps, IWrapperProps {
    onClick: (event: MouseEvent<HTMLButtonElement>) => void
}

const Button = (props: IButtonProps) => {
    const { icon, text, onClick, ...$styles } = props

    return (
        <Wrapper onClick={onClick} {...$styles}>
            <Descriptor icon={icon} text={text} />
        </Wrapper>
    )
}

Button.Wrapper = Wrapper

export default Button
