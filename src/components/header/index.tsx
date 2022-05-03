import {
  Container,
  WrapperImage,
  Image,
  WrapperButton,
  Wrapper,
  Language,
} from "./styles";
import StyledButton from "../button";

import { useButton } from "../../contexts/buttons";

import brazil from "../../assets/images/brazilFlag.svg";
import usa from "../../assets/images/usaFlag.svg";

const I18N_STORAGE_KEY = "i18nextLng";

const Header = () => {
  const handleClick = (lang: string) => {
    console.log(lang);
    localStorage.setItem(I18N_STORAGE_KEY, lang);
    window.location = window.location;
  };

  const { id, setId, px, setPx } = useButton();

  return (
    <Container>
      <Wrapper>
        <WrapperButton>
          <StyledButton
            onClick={() => {
              setId("about");
              setPx(0);
            }}
            text="buttons.about"
          />
        </WrapperButton>
        <WrapperButton>
          <StyledButton
            onClick={() => {
              setId("skills");
              setPx(400);
            }}
            text="buttons.skills"
          />
        </WrapperButton>
        <WrapperButton>
          <StyledButton
            onClick={() => {
              setId("repositories");
              setPx(960);
            }}
            text="buttons.repositories"
          />
        </WrapperButton>
        <WrapperButton>
          <StyledButton
            onClick={() => {
              setId("contacts");
              setPx(2300);
            }}
            text="buttons.contacts"
          />
        </WrapperButton>
      </Wrapper>
      <WrapperImage>
        <Language onClick={() => handleClick("pt-BR")}>
          <Image src={brazil} />
        </Language>
        <Language onClick={() => handleClick("en-US")}>
          <Image src={usa} />
        </Language>
      </WrapperImage>
    </Container>
  );
};

export default Header;
