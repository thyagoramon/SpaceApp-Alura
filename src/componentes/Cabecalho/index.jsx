import { styled } from "styled-components"
import CampoTexto from "../CampoTexto"

const HeaderStyled = styled.header`
  padding: 60px 0;
  display: flex;
  justify-content: space-between;  
  align-items: center;
  img {
    max-width: 212px;
  }
`

const Cabecalho = ({setPesquisa}) => {
  return (
    <HeaderStyled>
      <img src="./imagens/logo.png" alt="Logo Space App" />
      <CampoTexto setPesquisa={setPesquisa}>O que você procura?</CampoTexto>
    </HeaderStyled>
  )
}

export default Cabecalho
