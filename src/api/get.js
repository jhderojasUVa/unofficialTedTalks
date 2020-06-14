// Standar get
import { Error } from './models/error'

export const get = (url) => {
    return fetch(url, {
        'Accept': 'application/json'
    }).then(response => {
        return response.json();
    }).catch((err) => {
        return new Error(err)
    })
};

export const getRapidApi = (url, api_key) => {
    return fetch(url, {
        'method': 'GET',
        'headers': {
            'x-rapidapi-host': 'bestapi-ted-v1.p.rapidapi.com',
            'x-rapidapi-key': api_key
        }
    }).then(response => {
        return response.json();
    }).catch((err) => {
        return new Error(err)
    })
}