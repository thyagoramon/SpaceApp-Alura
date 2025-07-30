import { styled } from "styled-components"
import { FaHeart, FaRegHeart, FaExpandAlt } from "react-icons/fa";


const CardStyled = styled.figure`
  width: 100%;
  border-radius: 24px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  background-color: #001634;

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

const Card = ({ dados, onZoom }) => {
  return (
    <CardStyled>
      <img src={dados.path} alt={dados.titulo} />
      <figcaption>
        <Textos>
          <h3>{dados.titulo}</h3>
          <p>{dados.fonte}</p>
        </Textos>
        <Icones>
            <button><FaRegHeart /></button>
            <button onClick={() => onZoom(dados)}><FaExpandAlt /></button>
        </Icones>
      </figcaption>
    </CardStyled>
  )
}

export default Card
