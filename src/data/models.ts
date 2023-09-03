interface IAbility {
    id: number
    ability: string
    members: boolean
    level: number
    type: string
    adrenaline?: string
    target: string
    damage?: string
    cooldown: string
    equipment: string
    description: string[]
    image: string
    skill: string
}

type IAbilityMap = { [key: string]: IAbility[] }

interface ISlot {
    value: ISlotValue
    bar: number
    index: number
}

type ISlotValue = IAbility | null

export type { IAbility, IAbilityMap, ISlot, ISlotValue }
