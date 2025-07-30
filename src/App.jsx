import { useState } from "react"
import styled from "styled-components"

import EstilosGlobais from "./componentes/EstilosGlobais"
import Cabecalho from "./componentes/Cabecalho"
import BarraLateral from "./componentes/BarraLateral"
import Banner from "./componentes/Banner"
import Galeria from "./componentes/Galeria"

import imagemBanner from './assets/banner.png'
import fotos from './fotos.json'

const FundoGradiente = styled.div`
  background: linear-gradient(174.61deg, #041833 4.16%, #04244f 48%, #154580 96.76%);
  width: 100vw;
  min-height: 100vh;
`

const AppContainer = styled.div`
  width: 1440px;
  max-width: 100%;
  margin: 0 auto;
  padding: 10px;
`

const MainContainer = styled.main`
  display: flex;
  gap: 24px;
`

const Conteudo = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
`

const GaleriaFeed = styled.div`
  width: 100%;
`


const App = () => {
  const [fotosDaGaleria, setFotosDaGaleria] = useState(fotos)

  return (
    <FundoGradiente>
      <EstilosGlobais/>
      <AppContainer>
        <Cabecalho/>
        <MainContainer>
          <BarraLateral/>
          <Conteudo>
            <Banner imagem={imagemBanner}>
              <h2>A galeria mais<br/>completa de<br/>fotos do espaço!</h2>
            </Banner>
            <Galeria fotos={fotosDaGaleria}/>
          </Conteudo>
        </MainContainer>
      </AppContainer>
    </FundoGradiente>
  )
}

export default App
