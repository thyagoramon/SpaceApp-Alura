import { styled } from "styled-components"

const ItemNavegacaoStyled = styled.li`
  display: flex;
  align-items: center;  
  gap: 18px;
  cursor: pointer;  
  p {
    font-family: ${props => props.$ativo ? 'GandhiSansBold' : 'GandhiSansRegular'};
    font-size: 24px;
    font-weight: ${props => props.$ativo ? 700 : 400};
    color: ${props => props.$ativo ? '#7b78e5' : '#d9d9d9'};
    transition: 0.3s ease;
    &:hover {
      color: #7b78e5;
    }
  }
`
const ItemNavegacao = ({iconeAtivo, iconeInativo, ativo = false, children}) => {
  return (
    <ItemNavegacaoStyled $ativo={ativo}>
      <img src={ativo ? iconeAtivo : iconeInativo} />
      <p>{children}</p>
    </ItemNavegacaoStyled>
  )
}

export default ItemNavegacao
