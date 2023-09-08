const swapValuesAtIndexes = <T>(array: T[], index0: number, index1: number) => {
    const results = array.slice()
    const firstItem = array[index0]

    results[index0] = array[index1]
    results[index1] = firstItem

    return results
}
export default swapValuesAtIndexes
