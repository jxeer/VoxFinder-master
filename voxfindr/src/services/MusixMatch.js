import axios from 'axios'

const BASE_URL = 'https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.search?f_has_lyrics=&apikey=1fc540796437b9f14567b543bd96647e';

const fetchTracks = async () => {
  const resp = await axios.get(BASE_URL)
  return resp.data
}

export {
 fetchTracks
}
