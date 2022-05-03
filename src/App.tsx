import React from "react";
import "./style.css";
import Header from "./components/header";
import BodyContainer from "./pages/singlePage";
import { GitUserApiProvider } from "./contexts/gitUser";
import { ButtonProvider } from "./contexts/buttons";
import { GitRepositoriesApiProvider } from "./contexts/gitRepositories";

function App() {
 
  return (
    <>
      <GitRepositoriesApiProvider>
        <GitUserApiProvider>
          <ButtonProvider>
            <Header />
            <BodyContainer />
          </ButtonProvider>
        </GitUserApiProvider>
      </GitRepositoriesApiProvider>
    </>
  );
}

export default App;
