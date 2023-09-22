import getClassStartsWith from './getClassStartsWith'

const getSlotId = (classList: DOMTokenList): [number, number] | false => {
    const targetSid = getClassStartsWith(classList, 'sid')

    if (targetSid === false) {
        return false
    }

    const [, bar, index]: string[] = targetSid.split('-')

    return [Number(bar), Number(index)]
}

export default getSlotId
