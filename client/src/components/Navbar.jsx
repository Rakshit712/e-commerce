import React from 'react'
import styled from "styled-components"
import { CiSearch } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
// import {Link }from "react-router-dom"

const Container = styled.div`
height: 60px;
`
const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;
const Wrapper = styled.div`
padding: 10px 20px;
display: flex;
align-items: center;
justify-content: space-between;
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;
const Center = styled.div`
flex: 1;
text-align: center;
`;

const Right = styled.div`
flex: 1;
display: flex;
align-items: center;
justify-content: flex-end;
`;
const Language = styled.span`
  font-size: 14px;
  cursor: pointer;`;
  const Input = styled.input`
  border: none;
  
`;
const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
 `;


const Logo = styled.h1`
  font-weight: bold;
  
`;
function Navbar() {
  const quantity = useSelector(state => state.cart.quantity);
  

  return (
    <Container>
        <Wrapper>
            <Left>
                <Language>EN</Language>
                <SearchContainer>
                    <Input/>
                    <CiSearch />
                </SearchContainer>
            </Left>
            <Center>
          <Logo>
          <Link to="/">
            Shopee
            </Link>
            </Logo>
        </Center>
        <Right>
          <MenuItem>
          <Link to="/register">
            REGISTER
            </Link>
            </MenuItem>
          <MenuItem>
          <Link to="/login">
          SIGN IN
          </Link>
          </MenuItem>
          <Link to="/cart">
          <MenuItem>
            
            <CiShoppingCart />
            {quantity}
           
            
          </MenuItem>
          </Link>
        </Right>
        </Wrapper>
    </Container>
  )
}

export default Navbar