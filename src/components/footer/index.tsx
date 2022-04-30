import ContentContainer from "../contentContainer";
import { i18n } from "../../translate/i18n";

import { FooterWrapper, FooterText, TM } from "./styles";

const Footer = () => {
  const { t } = i18n;
  return (
    <FooterWrapper>
      <FooterText>
        <ContentContainer lineWidth={0} text1={t("texts.footer.text")} />
        <TM>© 2022 - Thiago Savi</TM>
      </FooterText>
    </FooterWrapper>
  );
};

export default Footer;
