import { styled } from 'styled-components'

const Wrapper = styled.section`
    width: fit-content;
    background-color: var(--color-background-50);
    border-width: 1px;
    border-style: solid;
    border-bottom-color: var(--color-utility-0);
    border-right-color: var(--color-utility-0);
    border-left-color: var(--color-utility-60);
    border-top-color: var(--color-utility-60);
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0.5rem;
`

const Slots = styled.div`
    display: grid;
    grid-template-columns: repeat(14, 42px);
    gap: 0.5rem;
    margin: 0 1rem;
`

const Group = styled.div`
    display: grid;
    grid-template-rows: repeat(2, 1fr);
`

export { Wrapper, Slots, Group }
