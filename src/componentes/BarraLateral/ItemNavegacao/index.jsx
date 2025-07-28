import { styled } from "styled-components"

const ItemNavegacaoStyled = styled.li`
  display: flex;
  align-items: center;  
  font-size: 24px;
  font-weight: 700;
  gap: 18px;
  cursor: pointer;
`

const ItemNavegacao = ({iconeAtivo, iconeInativo, ativo = false, children}) => {
  const cor = ativo ? '#7b78e5' : '#d9d9d9';

  return (
    <ItemNavegacaoStyled>
      <img src={ativo ? iconeAtivo : iconeInativo} />
      <p style={{
        color: cor
      }}>{children}</p>
    </ItemNavegacaoStyled>
  )
}

export default ItemNavegacao
