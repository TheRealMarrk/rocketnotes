import { Container , Brand, Menu , Search, Content, NewNote } from './styles'

import { Header } from '../../components/Header'
import { ButtonText } from '../../components/ButtonText'
import { Input } from '../../components/Input'
import { Section } from '../../components/Section'
import { Note } from '../../components/Note'


import {FiPlus, FiSearch} from 'react-icons/fi'


export function Home(){
  return(
  <Container>
    <Brand>
      <h1>RocketNotes</h1>
    </Brand>
    
    <Header />

    <Menu>
      <li><ButtonText title="Todos" isActive/></li>
      <li><ButtonText title="React"/></li>
      <li><ButtonText title="Nodejs"/></li>
    </Menu> 

    <Search>
      <Input placeholder="Pesquisar pelo Título" icon={FiSearch}/>
    </Search>
    
    <Content>
        <Section title="Minhas notas">
         { <Note data={{
          title: 'React', 
          tags: [
            {id: '1', name: "React"},
            {id: '2', name: "Rocketseat"}
            ]
          }}/>}
        </Section>
    </Content>
    
    <NewNote to="/New">
      <FiPlus/>
      Criar Nota
    </NewNote>
  </Container>
  )
}