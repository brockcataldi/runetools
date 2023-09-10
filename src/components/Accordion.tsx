import { useLayoutEffect, useState, useRef, FunctionComponent, ReactElement } from 'react'
import { styled } from 'styled-components'
import { gsap } from 'gsap'

const Container = styled.div``

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
    background-color: var(--color-background-70);
    cursor: pointer;
    border-width: 1px;
    border-style: solid;
    border-bottom-color: var(--color-utility-0);
    border-right-color: var(--color-utility-0);
    border-left-color: var(--color-utility-60);
    border-top-color: var(--color-utility-60);
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
    border: 1px solid var(--color-utility-60);
`

const Title = styled.span`
    font-size: 1.2rem;
    font-weight: 700;
    font-family: 'Cinzel', serif;
    color: var(--color-text-50);
`

const Chevron = styled.span`
    border: solid var(--color-text-50);
    border-width: 0 2px 2px 0;
    height: 0.5rem;
    pointer-events: none;
    position: absolute;
    right: 2em;
    top: 50%;
    transform: translateY(-60%) rotate(45deg);
    width: 0.5rem;
`

interface IAccordionPanelProps {
    $current: boolean
}

const Panel = styled.div<IAccordionPanelProps>`
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

interface IAccordionProps extends IAccordionPanelProps {
    title: string
    icon: string
    children?: ReactElement | ReactElement[]
}

const Accordion: FunctionComponent<IAccordionProps> = ({
    title,
    icon,
    children,
    $current,
}: IAccordionProps) => {
    const panelRef = useRef<HTMLDivElement>(null)
    const chevronRef = useRef<HTMLElement>(null)
    const [open, setOpen] = useState<boolean>(false)

    useLayoutEffect(() => {
        if (!panelRef.current || !chevronRef.current) {
            return
        }

        if (open) {
            gsap.to(panelRef.current, {
                paddingTop: '16px',
                paddingBottom: '16px',
                maxHeight: `${panelRef.current.scrollHeight + 32}px`,
                duration: 0.4,
            })

            gsap.to(chevronRef.current, {
                y: '-50%',
                rotate: -135,
                duration: 0.4,
            })
        } else {
            gsap.to(panelRef.current, {
                paddingTop: '0px',
                paddingBottom: '0px',
                maxHeight: `0px`,
                duration: 0.4,
            })

            gsap.to(chevronRef.current, {
                y: '-60%',
                rotate: 45,
                duration: 0.4,
            })
        }
    }, [open])

    const handleClick = () => {
        setOpen(!open)
    }

    return (
        <Container>
            <Heading>
                <Trigger onClick={handleClick}>
                    <Descriptor>
                        <Icon src={icon} alt={title} />
                        <Title>{title}</Title>
                    </Descriptor>
                    <Chevron ref={chevronRef} />
                </Trigger>
            </Heading>
            <Panel $current={$current} ref={panelRef}>
                {children}
            </Panel>
        </Container>
    )
}

export default Accordion
