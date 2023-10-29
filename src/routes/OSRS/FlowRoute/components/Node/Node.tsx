import { Wrapper, Header, Entry } from './Node.elements'
import Descriptor from '../../../../../components/Descriptor/Descriptor'

const Node = () => {
    return (
        <Wrapper>
            <Header>
                <Descriptor icon={'/osrs/skills/Woodcutting_icon.webp'} text={'Woodcutting'} />
            </Header>
            <Entry>
                <Descriptor text='Redwood Logs' />
            </Entry>
            <Entry>
                <Descriptor text={'Til Level 90'} />
                <Descriptor text={'Til 2,000,000 XP'} />
            </Entry>
            <Entry>
                <Descriptor text={'20,102 Logs'} />
            </Entry>
        </Wrapper>
    )
}

export default Node
