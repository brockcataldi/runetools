import { styled } from 'styled-components'

import Descriptor from '../Descriptor/Descriptor'

interface IWrapperProps {
    $padding?: 'default' | 'narrow'
    $hideText?: boolean
    $size?: 'default' | 'small'
    $background?: 'default' | 'dark' | 'light'
}

const Wrapper = styled.button<IWrapperProps>`
    appearance: none;
    border-width: 1px;
    border-style: solid;
    border-bottom-color: var(--color-utility-0);
    border-right-color: var(--color-utility-0);
    border-left-color: var(--color-utility-60);
    border-top-color: var(--color-utility-60);
    color: var(--color-text-50);
    box-sizing: border-box;
    display: flex;
    gap: 0.5rem;
    cursor: pointer;

    ${({ $padding }) => {
        return `padding: ${
            $padding === 'default' || $padding === undefined ? '0.5rem 1rem' : '0.5rem'
        };`
    }}

    ${({ $background }) => {
        return `background-color: var(--color-background-${
            $background === 'default' || $background === undefined
                ? '50'
                : $background === 'light'
                ? '70'
                : '30'
        });`
    }}

    ${Descriptor.Wrapper} svg {
        width: 1.2rem;
        height: 1.2rem;
        object-fit: contain;

        ${({ $size }) => {
            return $size === 'default' || $size === undefined
                ? `
                    width: 1.2rem;
                    height: 1.2rem;
                `
                : `
                    width: 1rem;
                    height: 1rem;
                `
        }}
    }

    ${Descriptor.Text} {
        ${({ $hideText }) => {
            return $hideText === false || $hideText === undefined
                ? `  
                    font-size: 1rem;
                    font-weight: 700;
                    font-family: 'Cinzel', serif;
                    color: var(--color-text-50);
                    display: block;
                    margin: 0;
                `
                : `
                    position: absolute;
                    width: 1px;
                    height: 1px;
                    padding: 0;
                    margin: -1px;
                    overflow: hidden;
                    clip: rect(0,0,0,0);
                    border: 0;
                `
        }}
    }
`

export { Wrapper }
export type { IWrapperProps }
