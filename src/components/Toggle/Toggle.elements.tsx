import { styled } from 'styled-components'

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: row;
    gap: 0.5rem;
    margin-bottom: 0.5rem;
`

const Input = styled.input.attrs({ type: 'checkbox' })`
    display: none;
`

const Label = styled.label`
    color: white;
    cursor: pointer;
`

const Checkmark = styled.span`
    display: grid;
    height: 18px;
    width: 18px;
    background-color: var(--rs3-color-background-30);
    position: relative;
    place-items: center;
    cursor: pointer;
    border: 2px solid var(--rs3-color-utility-60);

    ${Input}:checked + &:after {
        display: block;
    }

    ${Input}:checked + &:after {
        content: '';
        width: 5px;
        height: 10px;
        border: solid var(--rs3-color-text-50);
        border-width: 0 3px 3px 0;
        -webkit-transform: rotate(45deg);
        -ms-transform: rotate(45deg);
        transform: rotate(45deg);
        margin-top: -4px;
    }
`
export { Wrapper, Input, Label, Checkmark }
