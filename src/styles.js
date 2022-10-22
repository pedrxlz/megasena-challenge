import { Button } from "@chakra-ui/react";
import styled from "@emotion/styled";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  text-align: center;
`;

export const Title = styled.h1`
  margin-bottom: 20px;
  line-height: 1.15;
  font-size: 4rem;
  font-weight: 700;
  color: white;
  @media (max-width: 683px) {
    font-size: 3.5rem;
  }
  @media (max-width: 545px) {
    font-size: 3.2rem;
  }
  @media (max-width: 430px) {
    font-size: 3rem;
  }
`;

export const Description = styled.h3`
  margin: 0;
  line-height: 1.5;
  font-size: 1.5rem;
  font-weight: 400;
  color: white;
  @media (max-width: 683px) {
    font-size: 1.3rem;
  }
  @media (max-width: 545px) {
    font-size: 1.2rem;
  }
  @media (max-width: 430px) {
    font-size: 1.1rem;
  }
`;

export const NumbersContainer = styled.div`
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  gap: 10px;
`;

export const Number = styled.div`
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  color: #202124;
  font-weight: 700;
  border-radius: 50%;
  width: 100px;
  height: 100px;
  background-color: ${(props) => (props.red ? "#db5757" : "#81c995")};
  @media (max-width: 683px) {
    font-size: 1.5rem;
    width: 80px;
    height: 80px;
  }
  @media (max-width: 545px) {
    font-size: 1.2rem;
    width: 60px;
    height: 60px;
  }
  @media (max-width: 430px) {
    font-size: 1.1rem;
    width: 50px;
    height: 50px;
  }
`;

export const GenerateButton = styled(Button)`
  margin-top: 40px;
  font-size: 1.4rem;
  font-weight: 700;
  padding: 30px 150px;
  border-radius: 10px;
  background: none;
  border: 2px solid white;
  color: white;
  :hover {
    background-color: #b3c6b8;
    border-color: #b3c6b8;
    color: #202124;
  }
  @media (max-width: 683px) {
    font-size: 1.3rem;
    padding: 30px 100px;
  }
  @media (max-width: 545px) {
    font-size: 1.1rem;
    padding: 20px 75px;
  }
  @media (max-width: 430px) {
    font-size: 0.8em;
    padding: 15px 50px;
  }
`;
