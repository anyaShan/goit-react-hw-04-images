import axios from 'axios';

axios.defaults.baseURL = `https://pixabay.com/api/`;
const PIXABAY_KEY = `29626479-30d098b137805aefe019417a9`;

export async function apiQuery(nextQuery, page = 1) {
  const fetch = `?q=${nextQuery}&page=${page}&key=${PIXABAY_KEY}&image_type=photo&orientation=horizontal&per_page=12`;
  const respons = await axios.get(fetch);

  return respons;
}
