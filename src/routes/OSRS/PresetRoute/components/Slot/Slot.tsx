import { IEquipment } from '../../data/models'
import { Wrapper, Image } from './Slot.elements'
import Autocomplete from '../Autocomplete/Autocomplete'
import { useState } from 'react'

interface ISlot {
    value: IEquipment | null
    slot: string
    onChange: (value: IEquipment | null) => void
}

const Slot = ({ value, slot, onChange }: ISlot) => {
    const [showAutocomplete, setShowAutocomplete] = useState<boolean>(false)

    return (
        <>
            <Wrapper $position={slot} onClick={() => setShowAutocomplete(!showAutocomplete)}>
                {value === null ? null : (
                    <Image src={`/osrs/equipment/${slot}/${value.image}`} alt={value.name} />
                )}
            </Wrapper>
            <Autocomplete
                value={value}
                slot={slot}
                visible={showAutocomplete}
                onChange={onChange}
                onHide={() => {
                    setShowAutocomplete(false)
                }}
            />
        </>
    )
}

export default Slot
