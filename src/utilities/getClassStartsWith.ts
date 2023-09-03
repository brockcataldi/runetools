const getClassStartsWith = (classList: DOMTokenList, startsWith: string) => {
    let found = ''

    classList.forEach((value) => {
        if (value.startsWith(startsWith)) {
            found = value
        }
    })

    return found === '' ? false : found
}

export default getClassStartsWith
