import styled from 'styled-components'

interface IWrapperProps {
    $visible: boolean
}

const Wrapper = styled.div<IWrapperProps>`
    position: absolute;
    width: 204px;
    left: 100%;

    ${({ $visible }) => {
        return $visible === true
            ? `
            display: inline-block;
            visiblity: visible;
        `
            : `
            display: none;
            visibility: hidden;
        `
    }}
`

const Input = styled.input.attrs({ type: 'text' })`
    border: 1px solid transparent;
    background-color: #f1f1f1;
    padding: 10px;
    font-size: 16px;
    width: 204px;
    box-sizing: border-box;
`

const Value = styled.header`
    padding: 10px;
    background-color: white;
`

const Items = styled.ul`
    position: absolute;
    border: 1px solid #d4d4d4;
    border-bottom: none;
    border-top: none;
    z-index: 99;
    top: 100%;
    left: 0;
    right: 0;
    padding: 0;
    margin: 0;
    list-style-type: none;
    height: 200px;
    overflow-y: scroll;
`

interface IItemProps {
    $focused: boolean
}

const Item = styled.li<IItemProps>`
    padding: 10px;
    cursor: pointer;
    background-color: #fff;
    border-bottom: 1px solid #d4d4d4;

    ${({ $focused }) => {
        return $focused ? `background-color: red;` : `background-color: white`
    }}
`

export { Wrapper, Input, Items, Item, Value }
