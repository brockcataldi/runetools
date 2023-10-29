import { ChangeEvent, useState, KeyboardEvent, useEffect} from 'react'
import { useRecoilValue } from 'recoil'

import { equipmentAtom } from '../../data/atoms'

import { IEquipment } from '../../data/models'

import Descriptor from '../../../../../components/Descriptor/Descriptor'
import { Wrapper, Input, Items, Item, Value } from './Autocomplete.elements'

interface IAutocompleteProps {
    slot: string
    visible: boolean
    value: IEquipment | null;
    onChange: (value: IEquipment | null) => void;
    onHide: () => void;
}

const Autocomplete = ({ value, slot, visible, onChange, onHide }: IAutocompleteProps) => {
    
    const equipment = useRecoilValue(equipmentAtom(slot))

    const [filteredEquipment, setFilteredEquipment] = useState<IEquipment[]>(equipment);
    const [focus, setFocus] = useState<number>(0);
    const [inputValue, setInputValue] = useState<string>('')

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value)
    }

    const handleChange = (newValue: IEquipment | null) => {
        onChange(newValue);
        onHide()
    }

    const handleInputKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'ArrowDown') {
            event.preventDefault();
            setFocus(focus + 1);
        } else if (event.key === 'ArrowUp') { 
            event.preventDefault();
            setFocus(focus - 1);
        } else if(event.key === 'Enter'){
            event.preventDefault();
            handleChange(filteredEquipment[focus]);
        }
    }

    useEffect(() => {
        setFilteredEquipment(equipment
            .filter((value) => {
                return value.name.toLowerCase().includes(inputValue.toLowerCase())
            }))

        setFocus(0)

    }, [inputValue]);

    return (
        <Wrapper $visible={visible}>
            {
                value !== null ? (<Value>
                    <Descriptor
                        key={`${slot}-current`}
                        icon={`/osrs/equipment/${slot}/${value.image}`}
                        text={value.name}
                    />
                </Value>) : null
            }
            <Input value={inputValue} onChange={handleInputChange} onKeyDown={handleInputKeyDown} placeholder={'Search for an Item'} />

            {filteredEquipment.length > 0 && inputValue.length > 3 ? (
                <Items>
                    {
                        filteredEquipment.map((item, index) => {
                            return (
                                <Item 
                                    key={`autocomplete-${slot}-${index}`}
                                    onClick={() => { 
                                        handleChange(item)
                                    }} 
                                    $focused={focus === index}>
                                        <Descriptor
                                            key={`${slot}-${index}`}
                                            icon={`/osrs/equipment/${slot}/${item.image}`}
                                            text={item.name}
                                        />
                                </Item>
                            )
                        })}
                </Items>
            ) : null}
        </Wrapper>
    )
}

export default Autocomplete
