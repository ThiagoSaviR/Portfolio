import { ButtonStyled, WrapperButton } from "./styles";
import { i18n } from '../../translate/i18n'

interface Iprops {
  text: string;
}

const StyledButton: React.FC<Iprops> = ({ text }) => {
  return (
    <WrapperButton>
      <ButtonStyled>{i18n.t(text)}</ButtonStyled>;
    </WrapperButton>
  );
};

export default StyledButton;
