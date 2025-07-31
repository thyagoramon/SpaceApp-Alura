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

const Feed = ({dados, ImageToModal, setModalOn, likeToggle}) => {
  return (
    <FeedStyled>
      <Titulo>Navegue pela galeria</Titulo>
      <FeedContainer>
        {dados.map((dado) => (
          <Card
            key={dado.id}
            dados={dado}
            ImageToModal={ImageToModal}
            setModalOn={setModalOn}
            likeToggle={likeToggle}
          />
        ))}
      </FeedContainer>
    </FeedStyled>
  );
};

export default Feed;
