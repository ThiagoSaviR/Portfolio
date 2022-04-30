import styled from "styled-components";

export const Container = styled.div`
  margin-top: 90px;
`;
export const ContainerBody = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 360px;
  background: #225560;
`;
export const WrapperCard = styled.div`
  margin-top: 18px;
`;
export const BodyGitUser = styled.div`
  margin-top: 25px;
`;
export const WrapperContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 65px;
`;
export const ContactLink = styled.a`
  cursor: pointer;
  filter: drop-shadow(3px 3px 8px #000);
`;
export const ContactMail = styled(ContactLink)``;
export const WrapperContacts = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;
export const WrapperLinks = styled.div`
  width: 40%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  `;
export const ContactImg = styled.img``;

export const Form = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 70px;
`;
export const WrapperForm = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.p`
  width: 100%;
  font-size: 2rem;
  color: #edf060;
  margin: 25px;
  text-align: justify;
`;

export const WrapperButtons = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;

export const WrapperButton = styled.div`
  margin: 0 0 0 16px;
`;
export const WrapperFooter = styled.div`
  width: 100%;
  height: 150px;
  background: #310d20;
  margin-top: 25px;
`;