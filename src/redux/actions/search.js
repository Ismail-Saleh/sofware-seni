import axios from 'axios'
export const Search =(cari)=> {
    return{
        type: 'GET_REPO',
        payload: axios.get(`https://api.github.com/users/${cari}/repos`)
    }
}