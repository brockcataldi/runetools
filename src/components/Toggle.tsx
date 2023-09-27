import { styled } from 'styled-components'

const Field = styled.div`
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
    background-color: var(--color-background-30);
    position: relative;
    place-items: center;
    cursor: pointer;
    border: 2px solid var(--color-utility-60);

    ${Input}:checked + &:after {
        display: block;
    }

    ${Input}:checked + &:after {
        content: '';
        width: 5px;
        height: 10px;
        border: solid var(--color-text-50);
        border-width: 0 3px 3px 0;
        -webkit-transform: rotate(45deg);
        -ms-transform: rotate(45deg);
        transform: rotate(45deg);
        margin-top: -4px;
    }
`

interface IToggleProps {
    id: string
    label: string
    checked: boolean
    onChange?: (value: boolean) => void
}

const Toggle = ({ id, label, checked, onChange }: IToggleProps) => {
    const handleChange = () => {
        if (onChange !== undefined) {
            onChange(!checked)
        }
    }

    return (
        <Field>
            <Input checked={checked} id={id} name={id} onChange={handleChange} />
            <Checkmark onClick={handleChange} />
            <Label htmlFor={id}>{label}</Label>
        </Field>
    )
}

export default Toggle
