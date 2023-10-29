import { atom, atomFamily } from 'recoil'
import { IEquipment, IWorn } from './models'

import ammunition from './equipment/ammunition.json'
import body from './equipment/body.json'
import cape from './equipment/cape.json'
import feet from './equipment/feet.json'
import hands from './equipment/hands.json'
import head from './equipment/head.json'
import legs from './equipment/legs.json'
import neck from './equipment/neck.json'
import ring from './equipment/ring.json'
import shield from './equipment/shield.json'
import twoHanded from './equipment/two-handed.json'
import weapon from './equipment/weapon.json'

const equipmentDefaults: { [key: string]: IEquipment[] } = {
    ammuntion: ammunition,
    body: body,
    cape: cape,
    feet: feet,
    hands: hands,
    head: head,
    legs: legs,
    neck: neck,
    ring: ring,
    shield: shield,
    twoHanded: twoHanded,
    weapon: weapon,
}

const equipmentAtom = atomFamily<IEquipment[], string>({
    key: 'osrs/preset/equipment',
    default: (param: string) => {
        if (equipmentDefaults.hasOwnProperty(param)) {
            return equipmentDefaults[param]
        }
        return []
    },
})

const wornAtom = atom<IWorn>({
    key: 'osrs/preset/worn',
    default: {
        ammunition: null,
        body: null,
        cape: null,
        feet: null,
        hands: null,
        head: null,
        legs: null,
        neck: null,
        ring: null,
        shield: null,
        weapon: null,
    },
})

export { equipmentAtom, wornAtom }
