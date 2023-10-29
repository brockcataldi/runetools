import styled from 'styled-components'

const Wrapper = styled.div`
    width: 204px;
    height: 275px;
    position: relative;
`

const Slots = styled.div`
    width: 204px;
    height: 275px;
    position: absolute;
    inset: 0 0 0 0;
    z-index: 1;
`

const Backdrop = styled.picture`
    position: absolute;
    inset: 0 0 0 0;
    z-index: 0;
    width: 204px;
    height: 275px;
    display: block;
`
const Fill = styled.img`
    width: 204px;
    height: 275px;
`

export { Wrapper, Slots, Backdrop, Fill }
