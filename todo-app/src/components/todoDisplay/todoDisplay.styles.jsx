import styled from "styled-components";

export const Contanier = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 2%;
`;

export const Title = styled.h4`
  color: #9595b5;
  font-weight: 500;
  margin-bottom: 20px;
  font-family: kanit;
  margin: 5px;
`;


export const Task = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
  flex-direction: row;
  align-items: center;
  padding: 8% 2%;
  box-sizing: border-box;
  background-color: #414166;
  height: 50px;
  color: white;
  border-radius: 10px;
  gap: 5px;
  animation: slideIn 0.8s;
  @keyframes slideIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  box-shadow: rgba(0, 0, 0, 0.1) 0px 20px 25px -5px,
    rgba(0, 0, 0, 0.04) 0px 10px 10px -5px;

  &:hover {
    box-shadow: none;
  }
`;

export const Column = styled.div`
  display: flex;
  gap: 20px;
  width: 100%;
`;
export const LeftColumn = styled(Column)`
  justify-content: center;
  flex-shrink: 3;
`;

export const RightColumn = styled(Column)`
  justify-content: center;
  flex-shrink: 3;
`;

export const Icon = styled.img`
  width: 20px;
  margin-top: 2px;
  cursor: pointer;
`;

export const Span = styled.span`
  font-size: 16px;
  font-family: kanit;
  font-weight: 300;
`;

export const CompletedTask = styled(Span)`
  text-decoration: line-through;
  color: #ffffff53;
`;


