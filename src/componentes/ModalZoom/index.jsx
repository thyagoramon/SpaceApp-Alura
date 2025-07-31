import { styled } from "styled-components";
import Card from "../Galeria/Card";

const ModalZoomStyled = styled.dialog`
  background-color: transparent;
  border: none;

  position: fixed;
  top: 50%;
  transform: translateY(-50%);
  width: 100%;
  max-width: 50vw;
  margin: auto;
  z-index: 10;
`;

const Overlay = styled.div`
  background-color: rgba(0,0,0,0.7);
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1;
`

const ModalZoom = ({dados, modalOn, setModalOn, likeToggle, ImageToModal }) => {
  return (
    <>
      {modalOn &&
        <>
          <Overlay onClick={() => setModalOn(false)}/>
          <ModalZoomStyled open>
              <Card
                dados={dados}
                modalOn={modalOn}
                setModalOn={setModalOn}
                likeToggle={likeToggle}
                ImageToModal={ImageToModal}                
              />
          </ModalZoomStyled>
        </>
      }
    </>
  );
};

export default ModalZoom;
