import { styled } from "styled-components";
import Titulo from "@/componentes/Titulo";
import Card from "../Card";

const FeedStyled = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const FeedContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
`

const Feed = ({fotos, ImageToModal, modalOn, setModalOn}) => {
  return (
    <FeedStyled>
      <Titulo>Navegue pela galeria</Titulo>
      <FeedContainer>
        {fotos.map((foto) => (
          <Card
            key={foto.id}
            dados={foto}
            ImageToModal={ImageToModal}
            modalOn={modalOn}
            setModalOn={setModalOn}
          />
        ))}
      </FeedContainer>
    </FeedStyled>
  );
};

export default Feed;
