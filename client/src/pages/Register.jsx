import axios from 'axios';
import React, { useState } from 'react'
import styled from 'styled-components';

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
          center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  background-color: white;
 
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`;

const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
`;


function Register() {
  
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setemail] = useState("");
  const [confirmpassword, setconfirmPassword] = useState("");
  const [name, setName] = useState("");
  const [lastname, setLastName] = useState("");
  
  const handlesubmit=(e)=>{
    e.preventDefault();
     if (password === confirmpassword) {
       // send data to the server
      axios.post('http://localhost:8000/api/auth/register',{
        username : username ,
        password : password,
        email : email,
        name : name,
        lastname : lastname
         })
      .then((res) => {
          console.log(res);
          alert("Registration Successful!");
           window.location.href='/login';
      }).catch((err) => {
          console.error(err.message);
          alert("Error in Registration!")
      });
     } else {
       alert("Passwords do not match.");

     }
    }
  
    return(
    <Container>
    <Wrapper>
      <Title>CREATE AN ACCOUNT</Title>
      <Form onSubmit={handlesubmit}>
        <Input placeholder="name" value={name} onChange={(e)=>setName(e.target.value)} />
        <Input placeholder="last name" value={lastname} onChange={(e)=>setLastName(e.target.value)} />
        <Input value={username} onChange={(e) => setUsername(e.target.value)} placeholder="username" />
        <Input type='email'  placeholder="email" value={email} onChange={(e)=>setemail(e.target.value)} />
        <Input type='password' onChange={(e) => setPassword(e.target.value)} value={password} placeholder="password" />
        <Input placeholder="confirm password" value={confirmpassword} onChange={(e)=>setconfirmPassword(e.target.value)} />
        <Agreement>
          By creating an account, I consent to the processing of my personal
          data in accordance with the <b>PRIVACY POLICY</b>
        </Agreement>
        <Button>CREATE</Button>
      </Form>
    </Wrapper>
  </Container>
    )
}

export default Register