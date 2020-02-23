import axios from 'axios'

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization: 'Bearer V65o2Htsa847d_LmHgP0nQ-mzAN3I4qg85Fw2cfycMOdTjEJOADch96DnjL_-ktPqBamiUHwYWbttO7UTvUcbo8NpdTXHxgFJySFaIPTtkVIkPfxqh85u5AoMi02XnYx' 
  }
})
