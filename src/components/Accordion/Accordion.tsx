import {
    useLayoutEffect,
    useState,
    useRef,
    FunctionComponent,
    ReactElement,
    RefObject,
} from 'react'
import { gsap } from 'gsap'

import {
    Wrapper,
    Heading,
    Trigger,
    Descriptor,
    Icon,
    Title,
    Chevron,
    Panel,
    IPanelProps,
} from './Accordion.elements'

interface IAccordionProps extends IPanelProps {
    title: string
    icon: string
    children?: ReactElement | ReactElement[]
    onOpen: (panelRef: RefObject<HTMLDivElement>) => void
}

const Accordion: FunctionComponent<IAccordionProps> = ({
    $current,
    title,
    icon,
    children,
    onOpen,
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
        if (open === false) {
            onOpen(panelRef)
        }

        setOpen(!open)
    }

    return (
        <Wrapper>
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
        </Wrapper>
    )
}

export default Accordion
