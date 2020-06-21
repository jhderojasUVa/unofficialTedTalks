// Standar way to retrieve data from Ted Talks
import { get } from './get'
import NewestTalks from './models/newest'

const api_key = '172BB350-0206' // Don't steal! really!

// Steal everything from Google Feedburner and convert to JSON with rss2json
const url =
  'https://api.rss2json.com/v1/api.json?rss_url=http%3A%2F%2Ffeeds.feedburner.com%2FTedtalksHD'

export const getNewestTalks = async () => {
  const returnedData = await get(url)

  const {
    data: [],
  } = returnedData.items

  // Everything goes in the correct way
  if (data.length > 0) {
    return data.map(element => {
      return new NewestTalks(element)
    })
  }

  // Error! return empty
  return []
}
