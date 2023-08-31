import { atom, atomFamily } from 'recoil'

import { IAbility, ISlot, ISlotValue } from './models'

const actionBarsAtom = atomFamily<ISlotValue[], number>({
  key: 'actionBars',
  default: new Array(14).fill(null),
})

const selectionAtom = atom<(ISlot | IAbility)[]>({
  key: 'selection',
  default: [],
})

export { actionBarsAtom, selectionAtom }
