import { FunctionComponent, ReactElement } from 'react'
import { styled } from 'styled-components'

const Wrapper = styled.header`
    position: fixed;
    box-sizing: border-box;
    width: 100%;
    padding: 1rem;
    height: 74px;
    z-index: 3;
    background-color: var(--color-background-50);
    top: 0;
    left: 0;
    box-shadow: 0px 2px 3px black;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const TitleLink = styled.a`
    text-decoration: none;
`

const Title = styled.h1`
    font-size: 1.5rem;
    font-weight: 700;
    font-family: 'Cinzel', serif;
    color: var(--color-text-50);
    display: block;
    margin: 0;
    margin: 0;
`

const Content = styled.div`
    display: flex;
    place-content: center;
    gap: 1rem;
    flex-direction: row;
`

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
