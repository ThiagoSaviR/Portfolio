import { useEffect } from "react";
import { WrapperCard } from "./styles";

import { i18n } from "../../translate/i18n";
import { repo } from "../../services/repositories";
import { useGitRepositories } from "../../contexts/gitRepositories";

const Card = () => {
const { data, generateGitRepositoriesData } = useGitRepositories();

  useEffect(() => {
    generateGitRepositoriesData()
  });

  return (
    <WrapperCard>
      {data?.map((repository: any) =>
        repo.map((re: any) => (
          repository.id === re.id ? (
          <div key={repository.id} className="card">
            <div className="face face1">
              <div className="cardContent">
                <img src={re.img} alt="imagem" />
                <h3>{repository.name}</h3>
              </div>
            </div>
            <div className="face face2">
              <div className="cardContent">
                <p>{repository.description}</p>
                <a
                  href={repository.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {i18n.t("a.access")}
                </a>
              </div>
            </div>
          </div>
          ): null
        ))
      )}
    </WrapperCard>
  );
};

export default Card;
