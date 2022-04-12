import styled from "styled-components";
import { Button } from "antd";
import { ButtonProps } from "antd/lib/button";

export const WrapperButton = styled.div`
  height: 40px;
  width: 100%;
  border-radius: 15px 15px 0 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #c0803c;
  position: relative;
  filter: drop-shadow(3px 3px 8px #000);
`;

export const ButtonStyled: React.FC<ButtonProps> = styled(Button)`
  height: 40px;
  width: 100%;
  border-radius: 8px 8px 0 0;
  background: #171210;
  font-size: 1.12rem;
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

export const SecondarycButtonStyled: React.FC<ButtonProps> = styled(
  ButtonStyled
)`
  background: #310d20;
  &:hover {
    background: #310d20;
  }
  &:focus {
    background: #310d20;
  }
`;
