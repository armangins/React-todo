import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Box = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  box-sizing: border-box;
  padding: 2% 5%;
  background-color: #31315B;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 20px 25px -5px,
    rgba(0, 0, 0, 0.04) 0px 10px 10px -5px;
  border: 1px solid #f0f0f0;
  border-radius: 10px;
`;

export const Title = styled.h3`
  color: #9595b5;
  margin-bottom: 20px;
  font-family: kanit;

`;

export const Form = styled.form`
  width: 100%;
  display: flex;
`;

export const Input = styled.input`
  width: 100%;
  box-sizing: border-box;
  padding: 10px;
  border-radius: 10px 0px 0px 10px;
  border: none;
  background-color: #27264E;
  font-family: kanit;
  font-size: 18px;
  font-weight:500;
  color: white;

`;

export const Button = styled.button`
  margin: 0px;
  width: 20%;
  border: none;
  background-color: #3B74A9;
  border-radius: 0px 10px 10px 0px;

`;

export const Task = styled.div`
  display: flex;
  justify-content: space-around;
  flex-direction: row;
  align-items: center;
  padding: 5% 1%;
  box-sizing: border-box;
  background-color: #414166;
  width: 100%;
  height: 50px;
  color: white;
  border-radius: 10px;
  gap: 20px;
`;


export const Column = styled.div`
display: flex;
align-items: center;
gap: 20px;
    
`

export const Span = styled.span`
  font-size: 18px;
  font-family: kanit;
 
`


export const Icon = styled.img`
    width: 18px;
    margin-top: 2px;
`;