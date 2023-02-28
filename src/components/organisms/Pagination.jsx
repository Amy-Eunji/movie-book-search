import styled from 'styled-components'

const Pagination = ({ nowPage, total, onPageChange }) => {
  const lastPage = Math.ceil(total / 10)
  const startPage = Math.ceil(nowPage / 10) * 10 - 9
  const endPage = startPage + 9 > lastPage ? lastPage : startPage + 9

  const pageList = []
  for (let i = startPage; i <= endPage; i++) {
    pageList.push(i)
  }
  return (
    <List>
      {nowPage > 1 && (
        <Page onClick={() => onPageChange(nowPage - 1)}>{'<'}</Page>
      )}
      {pageList.map((page) => (
        <Page
          isActive={page === nowPage}
          key={page}
          onClick={() => onPageChange(page)}
        >
          {page}
        </Page>
      ))}
      {nowPage < lastPage && (
        <Page onClick={() => onPageChange(nowPage + 1)}>{'>'}</Page>
      )}
    </List>
  )
}

const List = styled.div`
  display: flex;
  justify-content: center;
`
const Page = styled.button`
  background: ${({ isActive }) => isActive && '#000'};
  color: ${({ isActive }) => isActive && '#fff'};
`

export default Pagination
