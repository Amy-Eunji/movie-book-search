import styled from 'styled-components'
import { Link } from 'react-router-dom'

const BookList = ({ data }) => {
  return (
    <List>
      {data.map(({ image, title, isbn }) => (
        <Link to={`/book/${isbn}`} key={image}>
          <Item>
            <Thumbnail src={image} />
            <Title dangerouslySetInnerHTML={{ __html: title }} />
          </Item>
        </Link>
      ))}
    </List>
  )
}

const List = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 10px;
  padding: 15px;
`
const Item = styled.div``
const Thumbnail = styled.img`
  width: 100%;
`
const Title = styled.span``

export default BookList
