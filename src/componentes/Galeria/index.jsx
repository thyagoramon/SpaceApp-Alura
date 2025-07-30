import { styled } from "styled-components"

import Titulo from "../Titulo"
import Tags from "./Tags"
import Populares from "./Populares"
import Card from "./Card"

const GaleriaStyled = styled.div`
  display: flex;
  flex-direction: column;
  padding: 39px 0;
  gap: 39px;
  width: 100%;
`

const Content = styled.div`
  width: 100%;
  display: flex;
`

const FeedContainer = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 24px;
`

const Feed = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
`

const Galeria = ({fotos = [], onFotoSelecionada}) => {
  return (
    <GaleriaStyled>
      <Tags/>
      <Content>
        <FeedContainer>
          <Titulo>Navegue pela galeria</Titulo>
          <Feed>
            {fotos.map(foto => <Card
              key={foto.id}
              dados={foto}
              onZoom={onFotoSelecionada}
            />)}
          </Feed>
        </FeedContainer>
        <Populares/>
      </Content>
    </GaleriaStyled>
  )
}

export default Galeria
