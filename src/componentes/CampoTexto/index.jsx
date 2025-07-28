import styled from "styled-components"
import search from './search.png'

const ContainerEstilizado = styled.div`
    display: inline-block;
    position: relative;
`

const CampoTextoStyled = styled.input`
  height: 56px;
  width: 566px;
  padding: 12px 16px;
  border-radius: 10px;  
  border: 2px solid #c98cf1;
  background: transparent;
  box-sizing: border-box;
  color: #d9d9d9;
  font-weight: 400;
  font-size: 20px;
  line-height: 20px;
  &::placeholder {
    color: #d9d9d9;
  }
`

const IconeLupa = styled.img`
  position: absolute;
  top: 10px;
  right: 10px;
  width: 38px;
  height: 38px;
`

const CampoTexto = ({children}) => {
  return (
    <ContainerEstilizado>
      <CampoTextoStyled type="search" placeholder={children}/>
      <IconeLupa src={search} alt="Ícone de lupa"/>
    </ContainerEstilizado>
  )
}

export default CampoTexto
