import styled from "styled-components";

export const Avatar = styled.img`
  width: 210px;
  position: absolute;
  bottom: 10px;
  right: 10px;
`;

export const Container = styled.div`
  position: fixed;
  top: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 360px;
  height: 100vh;
  background: #171210;
  z-index: 2;
`;

export const WrapperImage = styled.div`
  margin-top: 100px;
  width: 210px;
  height: 210px;
  background: #fff;
  border-radius: 50%;
  position: relative;
  background: #c0803c;
`;

export const WrapperName = styled.div`
  margin: 15px 0;

`;

export const Name = styled.h1`
  font-family: Roboto;
  font-weight: bold;
`;

export const Line = styled.div`
  background: #f0803c;
  height: 1px;
  width: 320px;
`;

export const Wrapper = styled.div``;
export const IconWrapper = styled.div`
  margin: 15px !important;
  display: flex;
`;
