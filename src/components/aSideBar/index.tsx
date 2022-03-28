import {
  Container,
  IconWrapper,
  Wrapper,
  WrapperImage,
  Avatar,
  WrapperName,
  Name,
} from "./styles";

import IconImage from "../IconImage";
import Line from "../line";

import avatar from "../../assets/images/avatar.png";
import Css from "../../assets/images/css.svg";
import Git from "../../assets/images/git.svg";
import Html from "../../assets/images/html.svg";
import Js from "../../assets/images/js.svg";
import React from "../../assets/images/react.svg";
import Ts from "../../assets/images/ts.svg";

const ASideBar = () => {
  return (
    <Container>
      <WrapperImage>
        <Avatar src={avatar} alt="Avatar" />
      </WrapperImage>
      <WrapperName>
        <Name>Thiago Savi Ribeiro</Name>
      </WrapperName>
      <Line styledWidth={320}/>
      <Wrapper>
        <IconWrapper>
          <IconImage
            img={React}
            alt="Logo React"
            reference="https://pt-br.reactjs.org/"
          />
          <IconImage
            img={Js}
            alt="Logo Javascript"
            reference="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
          />
          <IconImage
            img={Git}
            alt="Logo Git"
            reference="https://git-scm.com/docs/git/pt_BR"
          />
        </IconWrapper>
        <IconWrapper>
          <IconImage
            img={Html}
            alt="Logo HTML"
            reference="https://developer.mozilla.org/pt-BR/docs/Web/HTML"
          />
          <IconImage
            img={Ts}
            alt="Logo Typescript"
            reference="https://www.typescriptlang.org/pt/"
          />
          <IconImage
            img={Css}
            alt="Logo CSS"
            reference="https://developer.mozilla.org/pt-BR/docs/Web/CSS"
          />
        </IconWrapper>
      </Wrapper>
      <Line styledWidth={320}/>
    </Container>
  );
};

export default ASideBar;
