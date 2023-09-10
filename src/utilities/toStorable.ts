import { ISlotValue, IStorable } from "../data/models"

const toStorable = (bars: ISlotValue[][], types: string[]): IStorable => {
    return bars.map((bar) => {
        return bar.map(slot => {
            return slot === null ? null : [types.indexOf(slot.skill), slot.id]
        })
    })
}

export default toStorable;