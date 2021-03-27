const url = 'https://talento-digital-api.netlify.app/front-end/api/v1/users/me.json'
const urlc = 'https://rest-courses-api.herokuapp.com/api/v1/courses';

function getAssets() {
  return fetch(`${url}`)
    .then(res => res.json())
    .then(res => res)
    .catch(error => console.log(error))
}

function getAsset(id) {
  return fetch(`${urlc}/${id}`)
    .then(res => res.json())
    .then(res => res.data)
}



export default {
    getAssets,
    getAsset
  }
  