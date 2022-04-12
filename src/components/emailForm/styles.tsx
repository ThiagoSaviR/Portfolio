import styled from "styled-components";

export const Main = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
`;

export const Title = styled.h1`
  width: 100%;
  font-size: 2rem;
  color: #edf060;
  margin: 25px;
  text-align: justify;
`;

export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;



export const Error = styled.p`
  width: 100%;
  color: #e4e4e4;
  text-align: center;
  margin-bottom: 20px;
`;

export const WrapperButton = styled.div`
  height: 38px;
  width: 100%;
  display: flex;
  border-radius: 15px 15px 0 0;
  justify-content: center;
  align-items: center;
  background: #c0803c;
  position: relative;
  filter: drop-shadow(3px 3px 8px #000);
`;

export const ButtonStyled = styled.button`
  height: 40px;
  width: 100%;
  border-radius: 8px 8px 0 0;
  background: #310d20;
  font-size: 18px;
  font-weight: bold;
  color: #edf060;
  border: none;
  position: absolute;
  bottom: 4px;
  
  &:hover {
    background: #171210;
    color: #edf060;
  }
  &:focus {
    background: #171210;
    width: 100%;
    color: #edf060;
    bottom: 0px;
  }
`;
