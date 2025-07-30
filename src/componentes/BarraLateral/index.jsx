import { styled } from "styled-components"
import ItemNavegacao from "./ItemNavegacao"

const BarraLateralStyled = styled.aside`

`
const ListaStyled = styled.ul`
  list-style: none;
  width: 212px;
  display: flex;
  flex-direction: column;
  gap: 29px;
`

const BarraLateral = () => {
  return (
    <BarraLateralStyled>
      <nav>
        <ListaStyled>
          <ItemNavegacao iconeAtivo='./icones/home-ativo.png' iconeInativo='./icones/home-inativo.png' ativo={true}>Início</ItemNavegacao>
          <ItemNavegacao iconeAtivo='./icones/mais-vistas-ativo.png' iconeInativo='./icones/mais-vistas-inativo.png'>Mais vistas</ItemNavegacao>
          <ItemNavegacao iconeAtivo='./icones/mais-curtidas-ativo.png' iconeInativo='./icones/mais-curtidas-inativo.png'>Mais curtidas</ItemNavegacao>
          <ItemNavegacao iconeAtivo='./icones/novas-ativo.png' iconeInativo='./icones/novas-inativo.png'>Novas</ItemNavegacao>
          <ItemNavegacao iconeAtivo='./icones/surpreenda-me-ativo.png' iconeInativo='./icones/surpreenda-me-inativo.png'>Surpreenda-me</ItemNavegacao>
        </ListaStyled>
      </nav>
    </BarraLateralStyled>
  )
}

export default BarraLateral
