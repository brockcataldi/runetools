import { atom, selector } from 'recoil'

import { IAbilityMap } from './models'

import abilities from './abilities.json'

const currentDragParentAtom = atom<string | null>({
    key: 'currentDragParent',
    default: null,
})

// const barsAtom = atom<ISlotValue[][]>({
//     key: 'bars',
//     default: [new Array(14).fill(null)],
// })

const abilitiesAtom = atom<IAbilityMap>({
    key: 'abilities',
    default: abilities,
})

const abilitiesTypeExclusionAtom = atom<string[]>({
    key: 'abilitiesTypeExclusion',
    default: [],
})

const abilitiesTypes = selector({
    key: 'abilityTypes',
    get: ({get}) => {
        const abilities = get(abilitiesAtom);
        return Object.keys(abilities);
    }
})

const filteredAbilitiesSelector = selector({
    key: 'filteredAbilities',
    get: ({ get }) => {
        const exclusions = get(abilitiesTypeExclusionAtom)
        const abilities = get(abilitiesAtom)

        return Object.keys(abilities).reduce((previous: IAbilityMap, key: string) => {
            return {
                ...previous,
                ...{
                    [key]: abilities[key].filter((ability) => !exclusions.includes(ability.type)),
                },
            }
        }, {})
    },
})

export {
    // barsAtom,
    currentDragParentAtom,
    abilitiesAtom,
    abilitiesTypes,
    abilitiesTypeExclusionAtom,
    filteredAbilitiesSelector,
}
