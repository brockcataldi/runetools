import { useState } from 'react'
import { RefObject, useCallback, useRef } from 'react'

const useStateRef = <T>(defaultValue: T): [T, (value: T) => void, RefObject<T>] => {
    const [state, setState] = useState(defaultValue)
    const ref = useRef<T>(state)

    const dispatch = useCallback((value: T) => {
        ref.current = typeof value === 'function' ? value(ref.current) : value
        setState(ref.current)
    }, [])

    return [state, dispatch, ref]
}

export default useStateRef
