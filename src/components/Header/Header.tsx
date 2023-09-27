import { FunctionComponent, ReactElement } from 'react'

import { Wrapper, TitleLink, Title, Content } from './Header.elements'

interface IHeaderProps {
    children?: ReactElement | ReactElement[]
}

const Header: FunctionComponent<IHeaderProps> = ({ children }: IHeaderProps) => {
    return (
        <Wrapper>
            <TitleLink href={'/'}>
                <Title>Rune Tools</Title>
            </TitleLink>

            {children !== undefined ? <Content>{children}</Content> : null}
        </Wrapper>
    )
}


export default Header
