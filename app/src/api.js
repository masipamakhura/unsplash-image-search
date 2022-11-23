import axios from 'axios';
const searchImages = async (term ) =>{
  let response = await  axios.get('https://api.unsplash.com/search/photos/',{
        headers:{
            Authorization: 'Client-ID CTca-CqF-0Dl28-peMPn0SG64WkCa0de7FVd8y1Q7Ko'
        },
        params:{
            query:term
        }
    })
    return response.data.results;
}
export default searchImages;