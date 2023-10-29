import { styled } from 'styled-components'

import { ITheme } from '../../data/models'

const Wrapper = styled.header<ITheme>`
    position: fixed;
    box-sizing: border-box;
    width: 100%;
    padding: 1rem;
    height: 74px;
    z-index: 3;
    top: 0;
    left: 0;
    box-shadow: 0px 2px 3px black;
    display: flex;
    align-items: center;
    justify-content: space-between;

    background-color: ${({ $style }) => {
        return $style === 'osrs'
            ? 'var(--osrs-color-background-30)'
            : 'var(--rs3-color-background-50)'
    }};
`

const TitleLink = styled.a`
    text-decoration: none;
`

const Title = styled.h1`
    font-size: 1.5rem;
    font-weight: 700;
    font-family: 'Cinzel', serif;
    color: var(--rs3-color-text-50);
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

export { Wrapper, TitleLink, Title, Content }
