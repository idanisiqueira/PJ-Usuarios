import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { BsFillPersonFill } from "react-icons/bs";
import { BsCalendarHeart } from "react-icons/bs";
import LogoOne from "../../assets/img1.png";
import H1 from "../../components/Title"
import axios from "axios";


import { Container, ContainerItens, Input, Button, Image } from "./styles"

const App = () => {
  const [ users, setUsers ] = useState([]);
  const navigate = useNavigate()
  const inputName = useRef();
  const inputAge = useRef();

 async function addNewUser() {

    const { data: newUser } = await axios.post("http://localhost:3001/users", {name: inputName.current.value, age: inputAge.current.value})


    setUsers([...users, newUser])

    navigate('/usuarios')

  }

  return (
    <Container>
      <ContainerItens>
        <H1>BEM-VINDO!</H1>
        <Image alt="logo" src={LogoOne} />

        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon1"><BsFillPersonFill /></span>
          <Input ref={inputName} type="text" className="form-control" placeholder="Nome" aria-label="Username" aria-describedby="basic-addon1" />
        </div>

        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon1"><BsCalendarHeart /></span>
          <Input ref={inputAge} type="number" className="form-control" placeholder="Idade" aria-label="Username" aria-describedby="basic-addon1" />
        </div>

        <Button onClick={addNewUser}>CADASTRAR</Button>

      </ContainerItens>

    </Container>

  );

}

export default App