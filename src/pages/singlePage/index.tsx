import { i18n } from "../../translate/i18n";

import ASideBar from "../../components/aSideBar";
import ContentContainer from "../../components/contentContainer";
import Card from "../../components/card";
import GitUserCard from "../../components/gitUser";

import {
  ContainerBody,
  Container,
  WrapperCard,
  BodyGitUser,
  WrapperContent,
} from "./styles";

const BodyContainer = () => {
  return (
    <Container>
      <ASideBar />
      <ContainerBody>
        <WrapperContent>
          <ContentContainer
            alignTitle="flex-end"
            title={i18n.t("titles.about")}
            lineWidth={720}
            text1={i18n.t("texts.skills.subTitle1.text")}
          />
        </WrapperContent>
        <WrapperContent>
          <ContentContainer
            alignTitle="flex-start"
            title={i18n.t("titles.skills")}
            lineWidth={720}
            multiple={true}
            subTitle1={i18n.t("texts.skills.subTitle1.subTitle")}
            text1={i18n.t("texts.skills.subTitle1.text")}
            subTitle2={i18n.t("texts.skills.subTitle2.subTitle")}
            text2={i18n.t("texts.skills.subTitle2.text")}
            subTitle3={i18n.t("texts.skills.subTitle3.subTitle")}
            text3={i18n.t("texts.skills.subTitle3.text")}
          />
        </WrapperContent>
        <WrapperContent>
          <ContentContainer
            alignTitle="flex-end"
            title={i18n.t("titles.repositories")}
            lineWidth={720}
            text1={i18n.t("texts.repositories.texts.text1")}
          />
          <BodyGitUser>
            <GitUserCard />
          </BodyGitUser>
          <ContentContainer
            lineWidth={0}
            text1={i18n.t("texts.repositories.texts.text2")}
          />
          <WrapperCard>
            <Card />
          </WrapperCard>
        </WrapperContent>
      </ContainerBody>
    </Container>
  );
};

export default BodyContainer;
