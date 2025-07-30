import { styled } from "styled-components"
import tags from './tags.json'

const TagsStyled = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
`

const TotuloStyled = styled.h3`
  color: #d9d9d9;
  font-size: 24px;
`

const ButtonStyled = styled.button`
  color: #fff;
  font-size: 24px;
  padding: 8px 12px;
  border-radius: 10px;
  border: solid 2px transparent;
  background-color: #d9d9d930;
  cursor: pointer;
  transition: 0.3s ease;
  &:hover {
    border-color: #7B78E5;
  }
`

const Tags = () => {
  return (
    <TagsStyled>
      <TotuloStyled>Busque por tags:</TotuloStyled>
      {tags.map(tag => <ButtonStyled key={tag.id}>{tag.titulo}</ButtonStyled>)}
    </TagsStyled>
  )
}

export default Tags
