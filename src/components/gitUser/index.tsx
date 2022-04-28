import { useEffect } from "react";
import {
  WrapperGitUser,
  GitAvatar,
  WrapperGitDesc,
  GitUser,
  GitDesc,
} from "./styles";
import { useGitUser } from "../../contexts/gitUser";

const GitUserCard = () => {
  const { data, generateGitUserData } = useGitUser();

  useEffect(() => {
    generateGitUserData();
  });

  return (
    <WrapperGitUser href={data.html_url} target="_blank" rel="noopener noreferrer">
      <GitAvatar src={data.avatar_url} />
      <WrapperGitDesc>
        <GitUser>{data.login}</GitUser>
        <GitDesc>{data.bio}</GitDesc>
      </WrapperGitDesc>
    </WrapperGitUser>
  );
};

export default GitUserCard;
