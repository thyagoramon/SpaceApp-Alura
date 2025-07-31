import { styled } from "styled-components";
import Card from "../Galeria/Card";

const ModalZoomStyled = styled.dialog`
  background-color: transparent;
  border: none;

  position: absolute;
  top: 70px;
  width: 100%;
  max-width: 50vw;
  margin: 0 auto;
`;

const Overlay = styled.div`
  background-color: rgba(0,0,0,0.7);
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`

const ModalZoom = ({foto, modalOn, setModalOn}) => {
  return (
    <>
      {modalOn &&
        <>
          <Overlay/>
          <ModalZoomStyled open>
              <Card
                dados={foto}
                modalOn={modalOn}
                setModalOn={setModalOn}
              />
          </ModalZoomStyled>
        </>
      }
    </>
  );
};

export default ModalZoom;
