import axios from 'axios'


const API = axios.create({ baseURL: 'https://jsonplaceholder.typicode.com' })


export const fetchListings = async (page = 1, limit = 10) => {
const res = await API.get('/posts', { params: { _page: page, _limit: limit } })
return { data: res.data, total: parseInt(res.headers['x-total-count'] || '100') }
}