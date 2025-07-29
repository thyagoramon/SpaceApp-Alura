import styled from "styled-components"
import EstilosGlobais from "./componentes/EstilosGlobais"
import Cabecalho from "./componentes/Cabecalho"
import BarraLateral from "./componentes/BarraLateral"
import Banner from "./componentes/Banner"

import imagemBanner from './assets/banner.png'

const FundoGradiente = styled.div`
  background: linear-gradient(174.61deg, #041833 4.16%, #04244f 48%, #154580 96.76%);
  width: 100vw;
  min-height: 100vh;
`

function App() {
  return (
    <FundoGradiente>
      <EstilosGlobais/>
      <Cabecalho/>
      <div className="page">
        <BarraLateral/>
        <Banner imagem={imagemBanner}>
          <h2>A galeria mais<br/>completa de<br/>fotos do espaço!</h2>
        </Banner>
      </div>
    </FundoGradiente>
  )
}

export default App
