import { Container, WrapperTitle, Title, SubTitle, WrapperText, Text } from "./styles";

import Line from "../line";

interface IProps {
  alignTitle?: string;
  title?: string;
  subTitle1?: string;
  subTitle2?: string;
  subTitle3?: string;
  lineWidth?: number;
  text1: string;
  text2?: string;
  text3?: string;
  multiple?: boolean;
}

const ContentContainer: React.FC<IProps> = ({
  alignTitle,
  title,
  subTitle1,
  subTitle2,
  subTitle3,
  lineWidth,
  text1,
  text2,
  text3,
  multiple,
}) => {
  const styles = {
    alignItems: alignTitle,
  };
  return (
    <Container>
      <WrapperTitle style={styles}>
        <Title>{title}</Title>
        <Line styledWidth={lineWidth} />
      </WrapperTitle>
      {!multiple? (
      <WrapperText>
        <Text>{text1}</Text>
      </WrapperText>
      ): (
        <WrapperText>
        <SubTitle>{subTitle1}</SubTitle>
        <Text>{text1}</Text>
        <SubTitle>{subTitle2}</SubTitle>
        <Text>{text2}</Text>
        <SubTitle>{subTitle3}</SubTitle>
        <Text>{text3}</Text>
      </WrapperText>
      )}
    </Container>
  );
};

export default ContentContainer;
