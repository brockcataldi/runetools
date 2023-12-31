import { FunctionComponent, SVGProps, RefObject } from 'react'

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

interface IHasSlotsData {
    slotsRef: RefObject<ISlotValue[][]>
    setSlots: (slots: ISlotValue[][]) => void
}

interface ISlot {
    value: ISlotValue
    bar: number
    index: number
}

type IIcon = FunctionComponent<SVGProps<SVGSVGElement> & { title?: string | undefined }>
type ISlotValue = IAbility | null
type IStorable = (number[] | null)[][]

export type { IAbility, IAbilityMap, IIcon, ISlot, IHasSlotsData, ISlotValue, IStorable }
