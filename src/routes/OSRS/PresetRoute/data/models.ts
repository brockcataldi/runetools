interface IBonus {
    stab: number
    slash: number
    crush: number
    ranged: number
    magic: number
}

interface IEquipment {
    image: string
    name: string
    members: boolean
    attack: IBonus
    defence: IBonus
    strength: {
        melee: number
        ranged: number
        magic: number
    }
    prayer: number
    weight: number
    speed: number | string | null
}

interface IWorn {
    ammunition: IEquipment | null
    body: IEquipment | null
    cape: IEquipment | null
    feet: IEquipment | null
    hands: IEquipment | null
    head: IEquipment | null
    legs: IEquipment | null
    neck: IEquipment | null
    ring: IEquipment | null
    shield: IEquipment | null
    weapon: IEquipment | null
}

export type { IBonus, IEquipment, IWorn }
