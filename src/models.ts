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

interface ISlot {
  bar: number
  slot: number
}

type ISelection = ISlot | IAbility
type ISlotValue = IAbility | null

export type { IAbility, ISlot, ISelection, ISlotValue }
