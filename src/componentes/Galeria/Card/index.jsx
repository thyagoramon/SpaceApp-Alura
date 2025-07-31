import { styled } from "styled-components"
import { FaRegHeart, FaExpandAlt } from "react-icons/fa";
import { FaHeart } from "react-icons/fa6";

const CardStyled = styled.figure`
  width: 100%;
  border-radius: 6%;
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
  .btn-close{
    font-size: 25px;
  }
`

const Card = ({ dados, ImageToModal, setModalOn, simple = false, likeToggle }) => {
  const openModal = () => {
    ImageToModal(dados)
    setModalOn(true)
  }

  return (
    <CardStyled>
      <img onClick={openModal} src={dados.path} alt={dados.titulo} />
      {!simple &&
        <figcaption>
          <Textos>
            <h3>{dados.titulo}</h3>
            <p>{dados.fonte}</p>
          </Textos>
          <Icones>              
              <button onClick={() => likeToggle(dados)}>
                {dados.favorita ? <FaHeart /> : <FaRegHeart />}
              </button>
              <button onClick={openModal}>
                <FaExpandAlt />
              </button>              
          </Icones>
        </figcaption>
      }
    </CardStyled>
  )
}

export default Card
