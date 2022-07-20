import React from "react";
import {Col, Row, Container} from 'react-bootstrap'

// class Series extends React.Component {
//   render(){
//     return(
//       <>
//       {this.props.children}
//       <li>{this.props.name}</li>
//       </>
//     )
//   }
// }

// class App extends React.Component {
//   render() {
//     return (
//       <ol>
//         <Series name="Hello" />
//       </ol>
//     )
//   }
// }

// export default App
// const Series = ({name, children}) => {
//   return (
//     <>
//     {children}
//     <li>{name}</li>
//     </>
//   )
// }

// const App = ()=>{
//   return (
//     <ol>
//       <Series name={'yoga'}>wolololo</Series>
//     </ol>
//   )
// }

// export default App

const App = ()=>{
  const [num, setNumber] = React.useState(0)
  return (
    <Container className="p-5 vh-100">
        <Row className="h-100 flex align-items-center text-center">
          <Col className='flex'>
            <button onClick={()=>setNumber(num-1)} className="btn btn-primary square fs-1">-</button>
          </Col>
          <Col>
            <h1 className="fw-bold fs-1">{num}</h1>
          </Col>
          <Col className='flex'>
            <button onClick={()=>setNumber(num+1)} className="btn btn-danger square fs-1">+</button>
          </Col>
        </Row>
    </Container>
  )
}

export default App