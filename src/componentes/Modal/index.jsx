import { styled } from "styled-components";
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";

const ModalStyled = styled.dialog`
  background-color: #001634;
  border: none;

  position: fixed;
  top: 50%;
  transform: translateY(-50%);
  
  border-radius: 12px;
  margin: auto;
  z-index: 10;
  
  display: flex;
  flex-direction: column;
  overflow: hidden;

  img {
    width: 66vw;
    margin: auto;
    object-fit: contain;
  }

  figcaption {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    padding: 16px 22px;
  }
`;

const Overlay = styled.div`
  background-color: rgba(0, 0, 0, 0.7);
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1;
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

const Modal = ({ dados, modalOn, setModalOn, likeToggle }) => {
  const closeModal = () => {
    setModalOn(false)
  }

  return (
    <>
      {modalOn && (
        <>
          <Overlay onClick={() => setModalOn(false)} />
          <ModalStyled open>
            <img src={dados.path} alt={dados.titulo} />
            <figcaption>
              <Textos>
                <h3>{dados.titulo}</h3>
                <p>{dados.fonte}</p>
              </Textos>
              <Icones>
                <button onClick={() => likeToggle(dados)}>
                  {dados.favorita ? <FaHeart /> : <FaRegHeart />}
                </button>
                <button className="btn-close" onClick={closeModal}>
                  <IoMdClose />
                </button>                
              </Icones>
            </figcaption>          
          </ModalStyled>
        </>
      )}
    </>
  );
};

export default Modal;
