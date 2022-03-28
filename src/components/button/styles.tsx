import styled from "styled-components";
import { Button } from "antd";
import { ButtonProps } from "antd/lib/button";

export const WrapperButton = styled.div`
  height: 40px;
  width: 140px;
  border-radius: 25px;
  background: #c0803c;
  filter: drop-shadow(3px 3px 8px #000);
  position: relative;
  &:focus {
    background: #171210;
  }
  `;
  
  export const ButtonStyled: React.FC<ButtonProps> = styled(Button)`
  height: 40px;
  width: 140px;
  border-radius: 25px;
  background: #171210;
  font-size: 18px;
  font-weight: bold;
  color: #edf060;
  border: none;
  position: absolute;
  bottom: 5px;
  right: 5px;
  &:hover {
    background: #31221c;
    color: #edf060;
  }
  &:focus {
    background: #31221c;
    color: #edf060;
    bottom: -5px;
    right: -5px;
  }
`;
