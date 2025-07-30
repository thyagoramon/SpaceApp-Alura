import { styled } from "styled-components"
import { FaHeart, FaExpandAlt } from "react-icons/fa";


const CardStyled = styled.figure`
  width: 100%;
  border-radius: 24px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  background-color: #001634;
  transition: 0.3s ease;
  &:hover {
    scale: 1.03;
  }

  img {
    width: 100%;
    object-fit: cover;
    cursor: pointer;
  }

  figcaption {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    padding: 16px 22px;
  }
  `

const Textos = styled.div`
  display: flex;
  flex-direction: column;
  h3 {
    font-size: 20px;
    color: #fff;
  }
  p {
    font-size: 16px;
    color: #d9d9d9;
  }
`

const Icones = styled.div`
  display: flex;
  gap: 12px;
  button {
    background-color: transparent;
    border: none;
    cursor: pointer;
    color: #fff;
    font-size: 20px;
    transition: 0.3s ease;
    &:hover {
      color: #7B78E5;
    }
  }
`

const Card = ({imagem, titulo, fonte}) => {
  return (
    <CardStyled>
      <img src={imagem} alt={titulo} />
      <figcaption>
        <Textos>
          <h3>{titulo}</h3>
          <p>{fonte}</p>
        </Textos>
        <Icones>
            <button><FaHeart /></button>
            <button><FaExpandAlt /></button>
        </Icones>
      </figcaption>
    </CardStyled>
  )
}

export default Card
