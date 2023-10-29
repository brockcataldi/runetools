import styled from 'styled-components'

import Header from '../../../components/Header/Header'
import Node from './components/Node/Node'

const Container = styled.div``
const Main = styled.main`
    position: absolute;
    top: 74px;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: var(--osrs-color-background-10);
    z-index: 0;
    display: grid;
    place-items: center;
`

const FlowRoute = () => {
    return (
        <Container>
            <Header $style={'osrs'} />
            <Main>
                <Node />
            </Main>
        </Container>
    )
}

export default FlowRoute