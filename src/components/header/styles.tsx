import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  width: 100%;
  height: 90px;
  align-items: center;
  justify-content: space-between;
  background: #310d20;
  z-index: 2;
  filter: drop-shadow(3px 3px 8px #000);
`;

export const Title = styled.h1`
  font-family: "Pacifico";
  font-size: 2.6rem;
  font-weight: 400;
`;

export const WrapperTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const Wrapper = styled.div`
  width: 100%;
  margin-left: 400px;
  display: flex;
  align-items: center;
  justify-content: flex-end;

`;

export const WrapperButton = styled.div`
  width: 100%;
  margin: 0 10px;
`;
export const WrapperImage = styled.div`
  display: flex;
  margin: 0 20px;
`;
export const Image = styled.img`
  margin: 0 5px;
  border-radius: 5px;
  cursor: pointer;
`;

export const Language = styled.div``;
