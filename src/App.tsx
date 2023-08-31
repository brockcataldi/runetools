import { styled } from 'styled-components'
import Accordion from './components/Accordion'

import abilities from './data/Abilities'
import AbilityList from './components/AbilityList'

// Colors
// #16232b - Background 10
// #071b25 - Background 50

const Container = styled.div``
const Main = styled.main``
const Aside = styled.aside`
  position: fixed;
  width: 20rem;
  height: 100vh;
  top: 0;
  right: 0;
  background-color: #071b25;
  overflow-x: hidden;
  overflow-y: auto;
  box-shadow: -2px 0px 3px black;
`

const AsideTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 700;
  font-family: 'Cinzel', serif;
  color: #e1bb34;
  display: block; 
  padding: 0.75rem 1rem;
  margin: 0;
`;

const capitalize = (word: string) => {
  return word.charAt(0).toUpperCase() + word.slice(1)
}

const App = () => {
  return (
    <Container>
      <Main>
        <h1>Hello World</h1>
      </Main>
      <Aside>
        <AsideTitle>Abilities</AsideTitle>
        {Object.keys(abilities).map((key) => {
          return (
            <Accordion
              key={`accordion-${key}`}
              title={capitalize(key)}
              icon={`/skills/${key}_abilities_icon.webp`}
            >
              <AbilityList skill={key} abilities={abilities[key]} />
            </Accordion>
          )
        })}
      </Aside>
    </Container>
  )
}

export default App
