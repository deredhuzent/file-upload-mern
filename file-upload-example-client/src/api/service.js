import axios from 'axios'

const service = axios.create({
  baseURL: 'http://localhost:5000'
})

const errorHandler = err => {
  console.error(err)
  throw err
}

export default {
  service,
  handleUpload(theFile){
    return service.post('/files/upload', theFile)
      .then(res => res.data)
      .catch(errorHandler)
    },
  saveNewThing(newThing){
    return service.post('/api/things/create', newThing)
      .then(res => res.data)
      .catch(errorHandler)
  }
}