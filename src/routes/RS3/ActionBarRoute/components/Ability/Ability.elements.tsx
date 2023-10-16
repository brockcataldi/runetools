import { styled } from 'styled-components'

interface ISizeProps {
    $size?: 'small' | 'large'
}

interface IWrapperProps extends ISizeProps {
    $frame: boolean
}

const Wrapper = styled.div<IWrapperProps>`
    display: block;
    box-sizing: border-box;
    padding: 0;
    position: static;
    z-index: 0;

    ${({ $size, $frame }) => {
        if ($size === 'large') {
            return `
                border: ${$frame ? '1px solid var(--color-utility-60)' : 'none'};
                width: ${$frame ? '42px' : '40px'};
                height: ${$frame ? '42px' : '40px'};
            `
        }

        return `
            border: ${$frame ? '1px solid var(--color-utility-60)' : 'none'};
            width: ${$frame ? '32px' : '30px'};
            height: ${$frame ? '32px' : '30px'};
        `
    }}
`

const Image = styled.img<ISizeProps>`
    display: block;
    object-fit: contain;

    ${({ $size }) => {
        if ($size === 'large') {
            return `
                width: 40px;
                height: 40px;
            `
        }

        return `
            width: 30px;
            height: 30px;
        `
    }}
`

export { Wrapper, Image }
export type { ISizeProps, IWrapperProps }
