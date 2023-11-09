import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
`;
export const Box = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  background-color: #31315b;
  border-radius: 10px;
  gap: 20px;
`;

export const Title = styled.h3`
  font-weight: 400;
  color: #9595b5;
  margin-bottom: 20px;
  font-family: kanit;
  margin: 5px;
`;

export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: row;
  position: relative;
`;

export const Input = styled.input`
  width: 100%;
  box-sizing: border-box;
  padding: 10px;
  border-radius: 20px;
  border: none;
  font-family: kanit;
  font-size: 16px;
  font-weight: 300;

  color: white;
  background: rgb(39, 38, 78);
  box-shadow: rgba(0, 0, 0, 0.1) 0px 20px 25px -5px,
    rgba(0, 0, 0, 0.04) 0px 10px 10px -5px;

  &:focus {
    outline: none;
  }
`;

export const Button = styled.button`
  margin: 0px;
  border: none;
  color: white;
  width: 25px;
  height: 25px;
  background-color: ${prop =>prop.faded? '#3b74a9' : '#bec2c6'};
  border-radius: 100%;
  position: absolute;
  right: 10px;
  z-index: 2;
  border: none;
  top: 10px;
  cursor: pointer;
  text-align: center;
  transform: translateX(2px);
  transition: background-color 0.5s ease;



  box-shadow: rgba(0, 0, 0, 0.2) 0px 12px 28px 0px,
    rgba(0, 0, 0, 0.1) 0px 2px 4px 0px,
    rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset;
`;

export const Icon = styled.img`
  width: 18px;
  margin-top: 2px;
`;
