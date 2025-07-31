import { styled } from "styled-components"

import Titulo from "../Titulo"
import Tags from "./Tags"
import Populares from "./Populares"
import Card from "./Card"
import Feed from "./Feed"

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
  gap: 24px;
`



const Galeria = ({dados = [], fotosPopulares = [], ImageToModal, setModalOn, likeToggle, setTag}) => {
  return (
    <GaleriaStyled>
      <Tags setTag={setTag}/>
      <Content>
        <Feed
          dados={dados}
          ImageToModal={ImageToModal}
          setModalOn={setModalOn}
          likeToggle={likeToggle}
        />
        <Populares
          fotos={fotosPopulares}
          ImageToModal={ImageToModal}
          setModalOn={setModalOn}
        />
      </Content>
    </GaleriaStyled>
  )
}

export default Galeria
