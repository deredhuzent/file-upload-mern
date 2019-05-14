import React, { Component } from 'react'

export default class FileUpload extends Component {
  state={
    foto: ''
  }
  imageUpload = async e => {
    const uploadData = new FormData()
    uploadData.append('file', e.target.files[0])
    uploadData.append('upload_preset', 'ironhack-example')

    const response = await fetch(
      'https://api.cloudinary.com/v1_1/joss/image/upload',{
      method: 'POST',
      body: uploadData
      })

      const foto = await response.json()
    
      console.log(foto)
    this.setState({
      foto: foto.eager[0].url
    })
  }
  render() {
    return (
      <div>
        <img src={this.state.foto} alt='foto' width='300'/>
        <input type="file" name="foto" id="foto" onChange={this.imageUpload}/>
      </div>
    )
  }
}
