import { styled } from "styled-components"
import { FaFacebook, FaTwitter, FaInstagram   } from "react-icons/fa";


const FooterStyled = styled.footer`
  width: 100vw;
  height: 80px;
  background-color: #04244F;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  box-sizing: border-box;
  padding: 0 20px;
  .container {
    width: 100%;
    max-width: 1440px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .icones {
    display: flex;
    gap: 24px;
    font-size: 24px;
  }
  .icone {
    cursor: pointer;
  }
  p {
    font-size: 16px;
  }
`

const Footer = () => {
  return (
    <FooterStyled>
      <div className="container">
        <div className="icones">
          <FaFacebook className="icone" />
          <FaTwitter className="icone"/>
          <FaInstagram className="icone"/>
        </div>
        <p>Desenvolvido por Alura e Thyago Ramon</p>
      </div>
    </FooterStyled>
  )
}

export default Footer
