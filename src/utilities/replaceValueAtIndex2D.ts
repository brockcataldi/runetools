import replaceValueAtIndex from './replaceValueAtIndex'

const replaceValueAtIndex2D = <T>(array: T[][], value: T, x: number, y: number) => {
    return replaceValueAtIndex<T[]>(array, replaceValueAtIndex<T>(array[y], value, x), y)
}
export default replaceValueAtIndex2D
