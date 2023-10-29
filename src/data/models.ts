import { FunctionComponent, SVGProps } from 'react'

type IIcon = FunctionComponent<SVGProps<SVGSVGElement> & { title?: string | undefined }>

interface ITheme {
    $style: 'osrs' | 'rs3'
}

export type { IIcon, ITheme }
