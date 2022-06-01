import axios, {AxiosResponse} from 'axios'

export const InfoService = (username: string, password: string) => {
    
    return axios({
        method: 'post',
        url: '/',
        data: {
            username,
            password
        }
    })
}