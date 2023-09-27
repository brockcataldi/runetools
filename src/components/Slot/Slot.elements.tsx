import { styled } from 'styled-components'

const Wrapper = styled.button`
    width: 42px;
    height: 42px;
    display: block;
    box-sizing: border-box;
    padding: 0;
    border: 1px solid var(--color-utility-60);
    box-shadow: inset 0 0 8px 3px rgba(0, 0, 0, 0.25);
    background-color: transparent;
    z-index: 0;
`

export { Wrapper };