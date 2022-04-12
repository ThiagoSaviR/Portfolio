import { useEffect, useState } from "react";
import { WrapperCard } from "./styles";

import { i18n } from "../../translate/i18n";

import api from "../../services/api";
import { repo } from "../../services/repositories";

const Card = () => {
  const [repositories, setRepositories] = useState<any>([]);

  useEffect(() => {
    api.get("/ThiagoSaviR/repos").then(({ data }) => {
      setRepositories(data);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <WrapperCard>
      {repositories?.map((repository: any) =>
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
