import { useState } from 'react'
import { useRecoilState } from 'recoil'

import { abilitiesTypeExclusionAtom } from '../../data/atoms'

import Toggle from '../Toggle/Toggle'

const AsideFilter = () => {
    const [exclusions, setExclusions] = useRecoilState(abilitiesTypeExclusionAtom)

    const [basic, setBasic] = useState<boolean>(true)
    const [threshold, setThreshold] = useState<boolean>(true)
    const [other, setOther] = useState<boolean>(true)
    const [ultimate, setUltimate] = useState<boolean>(true)

    const update = (
        value: boolean,
        key: string,
        callback: React.Dispatch<React.SetStateAction<boolean>>,
    ) => {
        if (value) {
            setExclusions(exclusions.filter((exclusion) => exclusion !== key))
        } else {
            setExclusions([...exclusions, key])
        }

        callback(value)
    }

    return (
        <>
            <Toggle
                checked={basic}
                label={'Basic Abilities'}
                id={'toggle-basic-abilities'}
                onChange={(value) => update(value, 'Basic', setBasic)}
            />
            <Toggle
                checked={threshold}
                label={'Threshold Abilities'}
                id={'toggle-threshold-abilities'}
                onChange={(value) => update(value, 'Threshold', setThreshold)}
            />
            <Toggle
                checked={other}
                label={'Other Abilities'}
                id={'toggle-other-abilities'}
                onChange={(value) => update(value, 'Other', setOther)}
            />
            <Toggle
                checked={ultimate}
                label={'Ultimate Abilities'}
                id={'toggle-ultimate-abilities'}
                onChange={(value) => update(value, 'Ultimate', setUltimate)}
            />
        </>
    )
}

export default AsideFilter
