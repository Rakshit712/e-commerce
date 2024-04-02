import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Anouncements from '../components/Anouncements'
import styled from 'styled-components'
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { IoAddCircleOutline } from "react-icons/io5";
import { IoIosRemoveCircleOutline } from "react-icons/io";


const Container = styled.div``;

const Wrapper = styled.div`
  padding: 20px;
`;

const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? "black" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
`;

const TopTexts = styled.div`
`;
const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0px 10px;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Info = styled.div`
  flex: 3;
`;

const Product = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;

const Image = styled.img`
  width: 200px;
`;

const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const ProductName = styled.span``;

const ProductId = styled.span``;

const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;

const ProductSize = styled.span``;

const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const ProductAmount = styled.div`
  font-size: 24px;
  margin: 5px;
`;

const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;
`;

const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
`;

const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 50vh;
`;

const SummaryTitle = styled.h1`
  font-weight: 200;
`;

const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
`;

const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span``;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: black;
  color: white;
  font-weight: 600;
`;


function Cart() {
  
  const cart = useSelector((state) => state.cart);
  const [stripeToken, setStripeToken] = useState(null);
  const navigateTo = useNavigate();
  
  return (
   <Container>
    <Anouncements/>
    <Navbar/>
    <Wrapper>
        <Title>Your Bag</Title>
        <Top>
            <TopButton>
            <Link to="/">
              Continue shopping
              </Link>
              </TopButton>
            <TopText>
                Shopping Bag(2)
            </TopText>
            <TopText>
                Your Wishlist
            </TopText>
            <TopButton>CheckOut Now</TopButton>
        </Top>
        <Bottom>
            <Info>
              {cart.products.map((product) => (
              
                <Product>
                <ProductDetail>
                    <Image src='https://m.media-amazon.com/images/I/51Js-8owaUL._SY445_SX342_QL70_FMwebp_.jpg'></Image>
                    <Details>
                        <ProductName><b>Product:</b> {product.title} </ProductName>
                        <ProductId><b>ID</b>:{product._id}</ProductId>
                        <ProductColor> color:{product.color} </ProductColor>
                        <ProductSize><b>Size:</b>{product.size}</ProductSize>
                        
                    </Details>
                </ProductDetail>
                <PriceDetail>
                  <ProductAmountContainer>
                  <IoIosRemoveCircleOutline/>
                    <ProductAmount>{product.quantity}</ProductAmount>
                    <IoAddCircleOutline/>
                  </ProductAmountContainer>
                  <ProductPrice>
                    $ {product.price * product.quantity}
                  </ProductPrice>
                </PriceDetail>
                </Product>
                ))}
            </Info>
            <Summary>
                <SummaryTitle>Order summary</SummaryTitle>
                <SummaryItem>
                    <SummaryItemText>subTotal</SummaryItemText>
                    <SummaryItemPrice> {cart.total} </SummaryItemPrice>
                </SummaryItem>
                <SummaryItem>
                    <SummaryItemText>Estimated shipping</SummaryItemText>
                    <SummaryItemPrice>$5</SummaryItemPrice>
                </SummaryItem>
                <SummaryItem>
                    <SummaryItemText>shipping Discount</SummaryItemText>
                    <SummaryItemPrice>-$5</SummaryItemPrice>
                </SummaryItem>
                <SummaryItem>
                    <SummaryItemText>Total</SummaryItemText>
                    <SummaryItemPrice>{cart.total}</SummaryItemPrice>
            </SummaryItem>
            <Button>CHeck Out</Button>
            </Summary>
        </Bottom>
    </Wrapper>
    
   </Container>
  )
}

export default Cart