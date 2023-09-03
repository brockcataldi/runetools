import { useRecoilState, RecoilState } from 'recoil'
import { RefObject, useCallback, useRef } from 'react'

const useRecoilStateRef = <T>(
    recoilState: RecoilState<T>,
): [T, (value: T) => void, RefObject<T>] => {
    const [state, setState] = useRecoilState(recoilState)
    const ref = useRef<T>(state)

    const dispatch = useCallback((value: T) => {
        ref.current = typeof value === 'function' ? value(ref.current) : value
        setState(ref.current)
    }, [])

    return [state, dispatch, ref]
}

export default useRecoilStateRef
