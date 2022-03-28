import { useEffect, useState } from "react";
import {
  WrapperGitUser,
  GitAvatar,
  WrapperGitDesc,
  GitUser,
  GitDesc,
} from "./styles";

import api from "../../services/api";

const GitUserCard = () => {
  const [user, setUser] = useState<any>([]);

  useEffect(() => {
    api.get("/ThiagoSaviR").then(({ data }) => {
      setUser(data);
      console.log(user?.avatar_url);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <WrapperGitUser href={user.html_url} target="_blank" rel="noopener noreferrer">
      <GitAvatar src={user.avatar_url} />
      <WrapperGitDesc>
        <GitUser>{user.login}</GitUser>
        <GitDesc>{user.bio}</GitDesc>
      </WrapperGitDesc>
    </WrapperGitUser>
  );
};

export default GitUserCard;
