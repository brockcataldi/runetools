import { compressToBase64 } from 'lz-string'
import { ISlotValue } from '../data/models'

const toStorable = (bars: ISlotValue[][], types: string[]): string => {
    return compressToBase64(
        JSON.stringify(
            bars.map((bar) => {
                return bar.map((slot) => {
                    return slot === null ? null : [types.indexOf(slot.skill), slot.id]
                })
            }),
        ),
    )
}

export default toStorable
