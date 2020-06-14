// URLS from Ted Talks
// We use a third party called RapidApi
// You will retrieve everything for youtube (ouch!)
import * as RapidApiModels from './models/rapidapi'
import { getRapidApi } from './get'

const api_key = '67edf8ee8cmsh78e1c16e16a1f68p1c4219jsn2c5fcb2e450f'; // don't steal!

export const getTalkBySpeaker = async (speaker, size = 10) => {
    const url = `https://bestapi-ted-v1.p.rapidapi.com/bySpeaker?size=${size}&speaker=${encodeURIComponent(speaker)}`
    const returnData = await getRapidApi(url, api_key)
    const {data = []} = returnData
    
    // Everything goes in the correct way
    if (data.length > 0) {
        return data.map((element) => {
            return new RapidApiModels.Speaker(element)
        })
    }

    // Error! return empty
    return []
}

export const getTalkByName = async (name, size = 10) => {
    const url = `https://bestapi-ted-v1.p.rapidapi.com/talksByName?size=${size}&name=${encodeURIComponent(name)}`
    const returnData = await getRapidApi(url, api_key)
    const {data = []} = returnData
    
    // Everything goes in the correct way
    if (data.length > 0) {
        return data.map((element) => {
            return new RapidApiModels.Speaker(element)
        })
    }

    // Error! return empty?
    return []
}

// export const getTalkByYoutubeId = async (youtubeId) => {
//     fetch(`https://bestapi-ted-v1.p.rapidapi.com/talksByYoutubeId?youtubeId=${youtubeId}`, {
//         'method': 'GET',
//         'headers': {
//             'x-rapidapi-host': 'bestapi-ted-v1.p.rapidapi.com',
//             'x-rapidapi-key': api_key
//         }
//     })
//     .then(response => {
//         console.log(response);
//     })
//     .catch(err => {
//         console.log(err);
//     });
// }

export const getTalkByDescription = async (description, size = 10) => {
    const url = `https://bestapi-ted-v1.p.rapidapi.com/talksByDescription?size=${size}&description=${encodeURIComponent(description)}`
    const returnData = await getRapidApi(url, api_key)
    const {data = []} = returnData
    
    // Everything goes in the correct way
    if (data.length > 0) {
        return data.map((element) => {
            return new RapidApiModels.Description(element)
        })
    }

    // Error! return empty
    return []
}