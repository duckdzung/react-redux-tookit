import React from "react"
import Header from "./components/Header";
import TableUser from "./components/TableUser";
import Container from 'react-bootstrap/Container';

function App() {
  return (
    <>
      <Container>
        <Header />
        <hr />
        <TableUser />
      </Container>
    </>
  )
}


export default App;