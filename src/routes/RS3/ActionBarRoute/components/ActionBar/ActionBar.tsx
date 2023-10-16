import { Wrapper, Slots, Group } from './ActionBar.elements'
import Slot from '../Slot/Slot'
import Button from '../../../../../components/Button/Button'

import {
    removeValueAtIndex,
    replaceValueAtIndex,
    swapValuesAtIndexes,
} from '../../../../../utilities/Utilities'

import { TrashIcon, RefreshIcon, ChevronUp, ChevronDown } from '../../../../../vectors/vectors'

import { ISlotValue, IHasSlotsData } from '../../data/models'

interface IActionBarProps extends IHasSlotsData {
    id: number
    total: number
    slots: ISlotValue[]
}

const ActionBar = ({ id, slots, total, setSlots, slotsRef }: IActionBarProps) => {
    const onClickReset = () => {
        if (!slotsRef.current) {
            return
        }

        setSlots(replaceValueAtIndex<ISlotValue[]>(slotsRef.current, new Array(14).fill(null), id))
    }

    const onClickDelete = () => {
        if (!slotsRef.current) {
            return
        }

        setSlots(removeValueAtIndex<ISlotValue[]>(slotsRef.current, id))
    }

    const onClickUp = () => {
        if (!slotsRef.current) {
            return
        }

        setSlots(swapValuesAtIndexes<ISlotValue[]>(slotsRef.current, id, id - 1))
    }

    const onClickDown = () => {
        if (!slotsRef.current) {
            return
        }

        setSlots(swapValuesAtIndexes<ISlotValue[]>(slotsRef.current, id, id + 1))
    }

    return (
        <Wrapper>
            {total === 1 ? null : (
                <Group>
                    {id === 0 ? (
                        <span></span>
                    ) : (
                        <Button
                            onClick={onClickUp}
                            icon={ChevronUp}
                            text={'Shift the Action Bar Up'}
                            $hideText={true}
                            $background={'light'}
                            $padding={'narrow'}
                            $size={'small'}
                        />
                    )}
                    {slotsRef.current && slotsRef.current.length - 1 === id ? (
                        <span></span>
                    ) : (
                        <Button
                            onClick={onClickDown}
                            icon={ChevronDown}
                            text={'Shift the Action Bar Down'}
                            $hideText={true}
                            $background={'light'}
                            $padding={'narrow'}
                            $size={'small'}
                        />
                    )}
                </Group>
            )}
            <Slots>
                {slots.map((slot, index) => (
                    <Slot
                        key={`bar${id}-slot${index}`}
                        ability={slot}
                        bar={id}
                        index={index}
                        setSlots={setSlots}
                        slotsRef={slotsRef}
                    />
                ))}
            </Slots>
            <Group>
                <Button
                    onClick={onClickReset}
                    icon={RefreshIcon}
                    text={'Reset the Action Bar'}
                    $hideText={true}
                    $background={'light'}
                    $padding={'narrow'}
                    $size={'small'}
                />
                {total == 1 ? null : (
                    <Button
                        onClick={onClickDelete}
                        icon={TrashIcon}
                        text={'Delete the Action Bar'}
                        $hideText={true}
                        $background={'light'}
                        $padding={'narrow'}
                        $size={'small'}
                    />
                )}
            </Group>
        </Wrapper>
    )
}

export default ActionBar
