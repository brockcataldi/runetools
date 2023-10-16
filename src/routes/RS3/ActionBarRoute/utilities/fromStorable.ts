import { decompressFromBase64 } from 'lz-string'
import { IAbilityMap, ISlotValue, IStorable } from '../data/models'

const fromStorable = (
    data: string | null,
    types: string[],
    abilities: IAbilityMap,
): ISlotValue[][] => {
    if (data === null) {
        return [new Array(14).fill(null)]
    }

    try {
        const bars: IStorable = JSON.parse(decompressFromBase64(data))

        return bars.map((bar) => {
            return bar.map((slot) => {
                if (slot === null) {
                    return null
                }

                const type = types[slot[0]]
                return abilities[type][slot[1]]
            })
        })
    } catch (error) {
        return [new Array(14).fill(null)]
    }
}

export default fromStorable
