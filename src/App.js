import axios from "axios";
import React from "react";
import {Row, Container} from 'react-bootstrap'

const api = axios.create({
  baseURL: 'https://rickandmortyapi.com/api/character'
})

class App extends React.Component {
  state = {
    gambar: []
  }
  constructor(){
    super();
    api.get('/').then(res => {
      console.log(res.data.results); 
      this.setState({gambar: res.data.results})
    })
  }

  render() {
    return (
      <>
      <Container>
        <h1 className="text-center fw-bold">Rick and Morty Page 1</h1>
      <Row>
      {this.state.gambar.map(gbr =>
      // <Col className="col-3">
      // <img src={gbr.image} alt='gambar' className="w-100" />
      // <h3 className="text-center fw-bold">{gbr.name}</h3>
      // </Col>
      <figure className="col-4 col-md-3">
      <img src={gbr.image} alt='gambar' className="w-100" />
      <figcaption className="fs-4 fs-md-3 fw-bold text-center">{gbr.name}</figcaption>
      </figure>
      )}
      </Row>
      </Container>
      </>
    )
  }
}

export default App