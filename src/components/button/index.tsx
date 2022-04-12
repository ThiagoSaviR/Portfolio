import { ButtonStyled, WrapperButton, SecondarycButtonStyled } from "./styles";
import { i18n } from "../../translate/i18n";

interface Iprops {
  text: string;
  secundary?: boolean;
  onClick?: any;
  type?: any;
  disabled?: any;
  value?: any;  
}

const StyledButton: React.FC<Iprops> = ({ text, secundary, onClick, type, disabled, value }) => {
  const { t } = i18n;

  return (
    <WrapperButton>
      {!secundary ? (
        <ButtonStyled type={type} disabled={disabled} value={value} onClick={onClick}>
          {t(text)}
        </ButtonStyled>
      ) : (
        <SecondarycButtonStyled type={type} disabled={disabled} value={value} onClick={onClick}>
          {t(text)}
        </SecondarycButtonStyled>
      )}
    </WrapperButton>
  );
};

export default StyledButton;
