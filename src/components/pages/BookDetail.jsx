import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import { getBookDetail } from '../../apis'

const BookDetail = () => {
  const [book, setBook] = useState({})
  const { isbn } = useParams()
  useEffect(() => {
    // IIFE (즉시 실행함수)
    ;(async () => {
      const result = await getBookDetail({ d_isbn: isbn })
      setBook(result.items[0])
    })()
  }, [])

  const { image, title } = book

  return (
    <>
      <Thumbnail src={image} />
      <Title>{title}</Title>
    </>
  )
}

const Thumbnail = styled.img`
  width: 50%;
`
const Title = styled.h2``

export default BookDetail
