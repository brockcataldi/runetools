import styled from 'styled-components'

interface IWrapper {
    $position: string
}

const Wrapper = styled.button<IWrapper>`
    width: 36px;
    height: 36px;
    position: absolute;
    background-color: rgba(255, 0, 0, 0.25);
    appearance: none;
    border: none;
    cursor: pointer;
    display: grid;
    place-items: center;
    padding: 0;

    ${({ $position }) => {
        switch ($position) {
            case 'ring':
                return `
                top: 169px;
                left: 140px;
            `
            case 'hands':
                return `
                top: 169px;
                left: 28px;            
            `

            case 'feet':
                return `
                top: 169px;
                left: 84px;
            `

            case 'legs':
                return `
                top: 129px;
                left: 84px;
            `

            case 'weapon':
                return `
                top: 89px;
                left: 28px;
            `

            case 'shield':
                return `
                top: 89px;
                left: 140px;
            `
            case 'body':
                return `
                top: 89px;
                left: 84px;
            `

            case 'cape':
                return `
                top: 50px;
                left: 43px;
            `
            case 'ammunition':
                return `
                top: 50px;
                left: 125px;
            `

            case 'neck':
                return `
                top: 50px;
                left: 84px;
            `
            case 'head':
            default:
                return `
                top: 11px;
                left: 84px;
            `
        }
    }}
`

const Image = styled.img``

export { Wrapper, Image }
export type { IWrapper }
