import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom"
import { BsFillTrashFill } from "react-icons/bs";
import LogoTwo from "../../assets/img2.png";
import axios from "axios";


import { Container, H1, ContainerItens, Button, Image, User } from "./styles"

const Users = () => {
  const [ users, setUsers ] = useState([]);
  const history = useHistory()

  useEffect( () => { //é um REACT HOOK, onde terá uma função que vai ser chamada assim que a aplicação for iniciada
    async function fetchUsers(){
      const { data: newUsers } = await axios.get("http://localhost:3001/users");

      setUsers(newUsers);
    }

    fetchUsers()
    
  }, [])

  async function deleteUser(userId){
    await axios.delete(`http://localhost:3001/users/${userId}`)

    const NewUsers = users.filter (user => user.id !== userId)
    setUsers(NewUsers)
  }

  function goBackPage(){
    history.push('/')
  }

  return (
    <Container>
      <ContainerItens>
        <H1>USUÁRIOS</H1>
        <Image alt="logo" src={LogoTwo} />

        <ul>
          {users.map((user) => (
            <User key={user.id}>
              {user.name}<div></div>{user.age}
              <button onClick={ () => deleteUser(user.id) } id="basic-addon2"><BsFillTrashFill /></button>
            </User>
          ))}
        </ul>

        <Button onClick={goBackPage}>VOLTAR</Button>

      </ContainerItens>

    </Container>

  );

}

export default Users