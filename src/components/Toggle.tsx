import { styled } from 'styled-components'

const Field = styled.div`
    display: flex;
    align-item: center;
    justify-content: flex-start;
    flex-direction: row;
    gap: 0.25rem;
    margin-bottom: 0.25rem;
`

const Checkbox = styled.input.attrs({ type: 'checkbox' })``

const Label = styled.label`
    color: white;
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
            <Checkbox checked={checked} id={id} name={id} onChange={handleChange} />
            <Label htmlFor={id}>{label}</Label>
        </Field>
    )
}

export default Toggle
