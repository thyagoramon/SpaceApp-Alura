import { styled } from "styled-components"

const BannerStyled = styled.div`
  width: 100%;
  height: 328px;
  overflow: hidden;
  border-radius: 20px;

  display: flex;
  align-items: center;
  padding-left: 64px;
  
  background-image: url(${props => props.$imagem});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  h2 {
    font-size: 40px;
    color: #fff;
    font-weight: unset;
  }
`

const Banner = ({children, imagem}) => {
  return (
    <BannerStyled $imagem={imagem}>
      {children}
    </BannerStyled>
  )
}

export default Banner
