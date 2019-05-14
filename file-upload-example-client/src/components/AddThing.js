import React, { Component } from 'react'
import service from '../api/service'

export default class AddThing extends Component {
  state={
    name: '',
    description: '',
    imageUrl: ''
  }

  handleChange = e => {
    const {value, name} = e.target
    this.setState({[name]: value})
  }

  handleFileUpload = async e => {
    console.log(e.target.files[0])
    const uploadData = new FormData()
    uploadData.append('imageUrl', e.target.files[0])
    const response = await service.handleUpload(uploadData)
    this.setState({
      imageUrl: response.secure_url
    })
  }

  handleSubmit = async e => {
    e.preventDefault()

    const result = await service.saveNewThing(this.state)
    console.log(result)
  }

  render() {
    return (
      <div>
        <img src={this.state.imageUrl} alt='coso' width='100'/>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="name">Name</label>
          <input type="text" value={this.state.name} name="name" id="name" onChange={this.handleChange}/>
          <label htmlFor="description">Description</label>
          <input type="text" value={this.state.description} name="description" id="description" onChange={this.handleChange}/>
          <input type="file" name="imageUrl" id="imageUrl" onChange={this.handleFileUpload}/>
          <input type="submit" value="enviar"/>
        </form>
      </div>
    )
  }
}
