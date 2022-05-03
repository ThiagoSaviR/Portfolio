import { useState } from "react";
import { i18n } from "../../translate/i18n";

import ContentContainer from "../../components/contentContainer";
import Card from "../../components/card";
import GitUserCard from "../../components/gitUser";
import Footer from "../../components/footer";

import AsideBar from "../../components/asideBar"

import {
  ContainerBody,
  Container,
  WrapperCard,
  BodyGitUser,
  WrapperContent,
  WrapperContacts,
  ContactLink,
  ContactImg,
  ContactMail,
  WrapperLinks,
  Form,
  WrapperFooter
} from "./styles";

import linkedin from "../../assets/images/linkedin.svg";
import gmail from "../../assets/images/gmail.svg";

import EmailForm from "../../components/emailForm";
import StyledButton from "../../components/button";
import { useButton } from "../../contexts/buttons";

const BodyContainer = () => {
  const { t } = i18n;
  const [formIsVisible, setFormIsVisible] = useState(false);

  const { id, setId, px } = useButton();
  if (id) {
    window.scrollTo({
      top: px,
      behavior: "smooth",
    });
    setId("");
  }

  return (
    <Container>
      <AsideBar />
      <ContainerBody>
        <WrapperContent>
          <ContentContainer
            alignTitle="flex-end"
            title={t("titles.about")}
            lineWidth={720}
            text1={t("texts.about.text")}
          />
        </WrapperContent>
        <WrapperContent>
          <ContentContainer
            alignTitle="flex-start"
            title={t("titles.skills")}
            lineWidth={720}
            multiple={true}
            subTitle1={t("texts.skills.subTitle1.subTitle")}
            text1={t("texts.skills.subTitle1.text")}
            subTitle2={t("texts.skills.subTitle2.subTitle")}
            text2={t("texts.skills.subTitle2.text")}
          />
        </WrapperContent>
        <WrapperContent>
          <ContentContainer
            alignTitle="flex-end"
            title={t("titles.repositories")}
            lineWidth={720}
            text1={t("texts.repositories.texts.text1")}
          />
          <BodyGitUser>
            <GitUserCard />
          </BodyGitUser>
          <ContentContainer
            lineWidth={0}
            text1={t("texts.repositories.texts.text2")}
          />
          <WrapperCard>
            <Card />
          </WrapperCard>
        </WrapperContent>
        <WrapperContent>
          <ContentContainer
            alignTitle="flex-start"
            title={t("titles.contacts")}
            lineWidth={720}
            text1={t("texts.contacts.text")}
          />
          <WrapperContacts>
            <WrapperLinks>
              <ContactLink
                href="https://www.linkedin.com/in/thiago-savi-ribeiro-aa1690192/"
                target="_blank"
              >
                <ContactImg src={linkedin} alt="Linkedin" />
              </ContactLink>
              <ContactMail>
                <ContactImg
                  onClick={() => setFormIsVisible(!formIsVisible)}
                  src={gmail}
                  alt="Gmail"
                />
              </ContactMail>
            </WrapperLinks>
            <Form>
              {formIsVisible ? (
                <>
                  <EmailForm />
                  <StyledButton
                    onClick={() => setFormIsVisible(!formIsVisible)}
                    text={t("buttons.cancel")}
                  />
                </>
              ) : null}
            </Form>
          </WrapperContacts>
          <WrapperFooter>
            <Footer />
          </WrapperFooter>
        </WrapperContent>
      </ContainerBody>
    </Container>
  );
};

export default BodyContainer;
