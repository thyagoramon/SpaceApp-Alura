import { styled } from "styled-components"

const BotaoStyled = styled.button`
  width: 100%;
  padding: 14px;
  border-radius: 10px;  
  border: 2px solid #c98cf1;
  background: transparent;
  box-sizing: border-box;
  color: #fff;
  font-size: 20px;
  font-weight: 700;
  cursor: pointer;
  transition: 0.3s ease;
  &:hover {
    color: #c98cf1;
  }
`

const Botao = ({children}) => {
  return (
    <BotaoStyled>
      {children}
    </BotaoStyled>
  )
}

export default Botao
