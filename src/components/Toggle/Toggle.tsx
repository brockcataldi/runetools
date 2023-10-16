import { Wrapper, Input, Checkmark, Label } from './Toggle.elements'

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
        <Wrapper>
            <Input checked={checked} id={id} name={id} onChange={handleChange} />
            <Checkmark onClick={handleChange} />
            <Label htmlFor={id}>{label}</Label>
        </Wrapper>
    )
}

export default Toggle
