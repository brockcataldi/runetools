import { FunctionComponent, ReactElement } from 'react'

import { Wrapper, TitleLink, Title, Content } from './Header.elements'
import { ITheme } from '../../data/models'

interface IHeaderProps extends ITheme {
    children?: ReactElement | ReactElement[]
}

const Header: FunctionComponent<IHeaderProps> = ({ children, $style }: IHeaderProps) => {
    return (
        <Wrapper $style={$style}>
            <TitleLink href={'/'}>
                <Title>Rune Tools</Title>
            </TitleLink>

            {children !== undefined ? <Content>{children}</Content> : null}
        </Wrapper>
    )
}

export default Header
