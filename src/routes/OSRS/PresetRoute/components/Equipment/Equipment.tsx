import { useRecoilState } from 'recoil'
import { Wrapper, Slots, Backdrop, Fill } from './Equipment.elements'

import Slot from '../Slot/Slot'

import { wornAtom } from '../../data/atoms'
import { IEquipment, IWorn } from '../../data/models'

const Equipment = () => {
    const [worn, setWorn] = useRecoilState<IWorn>(wornAtom)

    const handleChange = (slot: string, value: IEquipment | null) => {
        setWorn({ ...worn, [slot]: value })
    }

    return (
        <Wrapper>
            <Slots>
                {Object.entries(worn).map(([slot, value]) => (
                    <Slot
                        key={slot}
                        value={value}
                        slot={slot}
                        onChange={(newValue) => {
                            handleChange(slot, newValue)
                        }}
                    />
                ))}
            </Slots>
            <Backdrop>
                <Fill
                    src={'/osrs/interface/worn_equipment_tab.png'}
                    alt={'Worn Equipment Tab Backdrop'}
                />
            </Backdrop>
        </Wrapper>
    )
}

export default Equipment
