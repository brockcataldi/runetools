const replaceValueAtIndex = <T>(array: T[], value: T, index: number) => {
    return [...array.slice(0, index), value, ...array.slice(index + 1)]
}
export default replaceValueAtIndex
