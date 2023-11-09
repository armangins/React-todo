import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  background-color: #c7c7c722;
  @media (max-width: 768px) {
    height: 100vh;
    box-sizing: border-box;
  }

  @media (min-width: 768px) {
    height: 100vh;
    padding: 5%;
    box-sizing: border-box;
  }
`;

export const Box = styled.div`
  max-width: 430px;
  width: 100%;
  height: 700px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 15px;
  background-color: #31315b;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 20px 25px -5px,
    rgba(0, 0, 0, 0.04) 0px 10px 10px -5px;
  gap: 20px;

  @media (max-width: 768px) {

    height: 100%;
  }
`;
