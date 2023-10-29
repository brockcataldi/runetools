import styled from 'styled-components'
import Descriptor from '../../../../../components/Descriptor/Descriptor'

const Wrapper = styled.section`
    background-color: var(--osrs-color-background-10);
    border: 3px solid var(--osrs-color-background-30);
    box-shadow: 0px 2px 3px black;
    width: 250px;
    padding: 4px;
    display: grid;
    grid-template-rows: repeat(3, 1fr);
    box-sizing: border-box;
`

const Header = styled.header`
    padding: 0.5rem;

    ${Descriptor.Text} {
        font-size: 1.1rem;
        font-weight: 700;
        font-family: 'Cinzel', serif;
        color: var(--osrs-color-text-50);
        text-align: left;
    }
`

const Entry = styled.div`
    padding: 0.5rem 1rem;

    ${Descriptor.Wrapper} {
        justify-content: flex-start;
    }

    ${Descriptor.Text} {
        font-size: 1.1rem;
        font-weight: 700;
        font-family: 'Cinzel', serif;
        color: var(--osrs-color-text-100);
        text-align: left;
    }
`

export { Wrapper, Header, Entry }
