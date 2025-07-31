import Titulo from "@/componentes/Titulo"
import { styled } from "styled-components"
import Botao from "@/componentes/Botao"
import Card from "../Card"

const PopularesStyled = styled.div`
  width: 212px;
  display: flex;
  flex-direction: column;
  gap: 24px;
`

const Populares = ({fotos, ImageToModal, setModalOn }) => {
  return (
    <PopularesStyled>
      <Titulo alinhamento={'center'}>Populares</Titulo>
      {fotos.map(foto => <Card
        key={foto.id}
        dados={foto}
        ImageToModal={ImageToModal}
        setModalOn={setModalOn}
        simple={true}
      />)}
      <Botao>Ver mais</Botao>
    </PopularesStyled>
  )
}

export default Populares
