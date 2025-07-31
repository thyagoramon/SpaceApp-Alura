import { useEffect, useState } from "react"
import styled from "styled-components"

import EstilosGlobais from "./componentes/EstilosGlobais"
import Cabecalho from "./componentes/Cabecalho"
import BarraLateral from "./componentes/BarraLateral"
import Banner from "./componentes/Banner"
import Galeria from "./componentes/Galeria"
import Modal from "./componentes/Modal"
import Footer from "./componentes/Footer"

import imagemBanner from './assets/banner.png'
import fotos from './fotos.json'
import fotosPopulares from './fotosPopulares.json'

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
  const [fotoSelecionada, setFotoSelecionada] = useState(null)
  const [modalOn, setModalOn] = useState(false)
  const [tag, setTag] = useState(0)
  const [pesquisa, setPesquisa] = useState('')

  
  useEffect(() => {
    const fotosFiltradas = fotos.filter(foto => {
      const filtroPorTag = !tag || foto.tagId === tag;
        //filtro 1, ou não tem tag ou a tag é igual
      const filtroPorPesquisa = !pesquisa || foto.titulo.toLowerCase().includes(pesquisa.toLowerCase().trim())
        //filtro 2, ou não tem pesquisa ou a pesquisa contem no título
      return filtroPorTag && filtroPorPesquisa
        //retorna os dois filtros
    })
    setFotosDaGaleria(fotosFiltradas)
  },[tag, pesquisa])
  
  const likeToggle = (foto) => {
    if (foto.id === fotoSelecionada?.id) {
      setFotoSelecionada({
        ...fotoSelecionada,
        favorita: !fotoSelecionada.favorita
      })
    }

    setFotosDaGaleria(fotosDaGaleria.map(fotoDaGaleria => {
      return {
        ...fotoDaGaleria,
        favorita: fotoDaGaleria.id === foto.id ? !fotoDaGaleria.favorita : fotoDaGaleria.favorita
      }
    }))
  }

  return (
    <FundoGradiente>
      <EstilosGlobais/>
      <AppContainer>
        <Cabecalho setPesquisa={setPesquisa}/>
        <MainContainer>
          <BarraLateral/>
          <Conteudo>
            <Banner imagem={imagemBanner}>
              <h2>A galeria mais<br/>completa de<br/>fotos do espaço!</h2>
            </Banner>
            <Galeria
              dados={fotosDaGaleria}
              fotosPopulares={fotosPopulares}
              ImageToModal={foto => setFotoSelecionada(foto)}
              setModalOn={setModalOn}
              likeToggle={likeToggle}
              setTag={setTag}
            />
          </Conteudo>
        </MainContainer>
      </AppContainer>
      <Modal
        dados={fotoSelecionada}
        modalOn={modalOn}
        setModalOn={setModalOn}
        likeToggle={likeToggle}
      />
      <Footer/>
    </FundoGradiente>
  )
}

export default App
