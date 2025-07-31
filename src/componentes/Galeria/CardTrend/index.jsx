import { styled } from "styled-components"
import { FaHeart, FaRegHeart, FaExpandAlt } from "react-icons/fa";


const CardTrendStyled = styled.figure`
  width: 100%;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  background-color: #001634;
  cursor: pointer;

  img {
    width: 100%;
    object-fit: cover;
  }
`

const CardTrend = ({ dados }) => {
  return (
    <CardTrendStyled>
      <img src={dados.path} />
    </CardTrendStyled>
  )
}

export default CardTrend
