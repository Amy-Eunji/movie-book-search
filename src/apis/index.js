import axios from 'axios'

const instance = axios.create({
  headers: {
    'X-Naver-Client-Id': 'ye4Wl3VItrIKnrWiHJwl',
    'X-Naver-Client-Secret': 'ghwycGqBlU',
  },
})
export const getMovieList = async (params) => {
  const { data } = await instance.get('/v1/search/movie.json', {
    params,
  })

  return data
}

export const getBookList = async (params) => {
  const { data } = await instance.get('/v1/search/book.json', {
    params,
  })
  return data
}

export const getBookDetail = async (params) => {
  const { data } = await instance.get('/v1/search/book_adv.json', {
    params,
  })
  return data
}
