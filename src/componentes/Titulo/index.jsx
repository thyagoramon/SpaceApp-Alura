import { styled } from "styled-components"

const TituloStyled = styled.div`
  font-size: 32px;
  color: #7b78e5;
  text-align: ${props => props.$alinhamento ? props.$alinhamento : 'left'};
`

const Titulo = ({children, alinhamento}) => {
  return (
    <TituloStyled $alinhamento={alinhamento}>
      {children}
    </TituloStyled>
  )
}

export default Titulo
