import Titulo from "@/componentes/Titulo"
import { styled } from "styled-components"

const PopularesStyled = styled.div`
  width: 212px;
`

const Populares = () => {
  return (
    <PopularesStyled>
      <Titulo alinhamento={'center'}>Populares</Titulo>
    </PopularesStyled>
  )
}

export default Populares
