import { styled } from 'styled-components'

const Wrapper = styled.aside`
    position: fixed;
    width: 100%;
    max-width: 20.5rem;
    height: calc(100vh - 72px);
    top: 72px;
    right: 0;
    background-color: var(--rs3-color-background-50);
    box-shadow: -2px 0px 3px black;
    z-index: 0;
    overflow-y: auto;
`

const Header = styled.header`
    padding: 0.75rem 1rem;
`

const Title = styled.h2`
    font-size: 1.5rem;
    font-weight: 700;
    font-family: 'Cinzel', serif;
    color: var(--rs3-color-text-50);
    display: block;
    margin: 0 0 0.5rem 0;
`

export { Wrapper, Header, Title }
