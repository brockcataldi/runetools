import { styled } from 'styled-components'

const Wrapper = styled.div``

const Heading = styled.h3`
    margin: 0;
`

const Trigger = styled.button`
    appearance: none;
    width: calc(100% - 1px);
    box-sizing: border-box;
    margin: 0;
    padding: 1rem 1.5rem;
    position: relative;
    background-color: var(--rs3-color-background-70);
    cursor: pointer;
    border-width: 1px;
    border-style: solid;
    border-bottom-color: var(--rs3-color-utility-0);
    border-right-color: var(--rs3-color-utility-0);
    border-left-color: var(--rs3-color-utility-60);
    border-top-color: var(--rs3-color-utility-60);
`

const Descriptor = styled.span`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 0.75rem;
`

const Icon = styled.img`
    width: 1.5rem;
    height: 1.5rem;
    object-fit: contain;
    border: 1px solid var(--rs3-color-utility-60);
`

const Title = styled.span`
    font-size: 1.2rem;
    font-weight: 700;
    font-family: 'Cinzel', serif;
    color: var(--rs3-color-text-50);
`

const Chevron = styled.span`
    border: solid var(--rs3-color-text-50);
    border-width: 0 2px 2px 0;
    height: 0.5rem;
    pointer-events: none;
    position: absolute;
    right: 2em;
    top: 50%;
    transform: translateY(-60%) rotate(45deg);
    width: 0.5rem;
`

interface IPanelProps {
    $current: boolean
}

const Panel = styled.div<IPanelProps>`
    overflow-y: hidden;
    padding: 0 16px;
    max-height: 0px;
    background-color: #04131b;
    color: white;
    box-shadow: inset 0 0 8px 3px rgba(0, 0, 0, 0.5);

    ${({ $current }) => {
        return `overflow-y: ${$current ? 'visible' : 'hidden'};`
    }}
`

export { Wrapper, Heading, Trigger, Descriptor, Icon, Title, Chevron, Panel }
export type { IPanelProps }
