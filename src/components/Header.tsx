import { styled } from 'styled-components';
import { ShareIcon } from '../vectors/vectors'

const Wrapper = styled.header`
    position: fixed;
    box-sizing: border-box;
    width: 100%;
    padding: 1rem;
    z-index: 3;
    background-color: #071b25;
    top: 0;
    left: 0;
    box-shadow: 0px 2px 3px black;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const TitleLink = styled.a`
    text-decoration: none;
`;

const Title = styled.h1`
    font-size: 1.5rem;
    font-weight: 700;
    font-family: 'Cinzel', serif;
    color: #e1bb34;
    display: block;
    margin: 0;
    margin: 0;
`

const Content = styled.div``;

const Button = styled.button`
    appearance: none;
    background-color: #16232b;
    border-width: 1px;
    border-style: solid;
    border-bottom-color: black;
    border-right-color: black;
    border-left-color: #39444b;
    border-top-color: #39444b;
    color: #e1bb34;
    box-sizing: border-box;
    padding: 0.5rem 1rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 0.75rem;
    cursor: pointer;

    svg {
        width: 1.25rem;
        height: 1.25rem;
    }
`

const ButtonText = styled.span`
    font-size: 1rem;
    font-weight: 700;
    font-family: 'Cinzel', serif;
    color: #e1bb34;
    display: block;
    margin: 0;
`

const Header = () => {
    return (
        <Wrapper>
            <TitleLink href={'/'}>
                <Title>RuneTools</Title>
            </TitleLink>

            <Content>
                <Button>
                    <ShareIcon />
                    <ButtonText>Share</ButtonText>
                </Button>
            </Content>
        </Wrapper>
    );
}

export default Header;