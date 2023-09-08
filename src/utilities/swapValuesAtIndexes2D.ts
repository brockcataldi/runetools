import replaceValueAtIndex2D from './replaceValueAtIndex2D'

const swapValuesAtIndexes2D = <T>(
    array: T[][],
    targetX: number,
    targetY: number,
    currentX: number,
    currentY: number,
) => {
    const target = array[targetY][targetX]
    const current = array[currentY][currentX]

    return replaceValueAtIndex2D(
        replaceValueAtIndex2D(array, target, currentX, currentY),
        current,
        targetX,
        targetY,
    )
}

export default swapValuesAtIndexes2D
