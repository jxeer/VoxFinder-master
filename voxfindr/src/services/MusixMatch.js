import axios from 'axios'

const BASE_URL = 'https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.search?apikey=1fc540796437b9f14567b543bd96647e&';

const fetchTracks = async (lyric) => {
  try {
  const resp = await axios.get(`${BASE_URL}q_lyrics=${lyric}`)
  return resp.data
  } catch (e) {
  console.log(e.message)
 }
}

export {
 fetchTracks
}
