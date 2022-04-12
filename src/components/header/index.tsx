import {
  Container,
  WrapperImage,
  Image,
  WrapperButton,
  Wrapper,
  Language,
} from "./styles";
import StyledButton from "../button";

import brazil from "../../assets/images/brazilFlag.svg";
import usa from "../../assets/images/usaFlag.svg";

const I18N_STORAGE_KEY = "i18nextLng";

const Header = () => {
  const handleClick = (lang: string) => {
    console.log(lang);
    localStorage.setItem(I18N_STORAGE_KEY, lang);
    window.location = window.location;
  };

  return (
    <Container>
      <Wrapper>
        <WrapperButton>
          <StyledButton text="buttons.about" />
        </WrapperButton>
        <WrapperButton>
          <StyledButton text="buttons.skills" />
        </WrapperButton>
        <WrapperButton>
          <StyledButton text="buttons.contacts" />
        </WrapperButton>
        <WrapperButton>
          <StyledButton text="buttons.repositories" />
        </WrapperButton>
      </Wrapper>
      <WrapperImage>
        <Language onClick={() => handleClick('pt-BR')}>
          <Image src={brazil} />
        </Language>
        <Language onClick={() => handleClick('en-US')}>
          <Image src={usa} />
        </Language>
      </WrapperImage>
    </Container>
  );
};

export default Header;
