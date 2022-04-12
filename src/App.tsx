import React from "react";
import "./style.css";
import Header from "./components/header";
import BodyContainer from "./pages/singlePage";
import { GitUserApiProvider } from "./contexts";

function App({ videoClasses }: any) {
  console.log(videoClasses);
  return (
    <>
      <GitUserApiProvider>
        <Header />
        <BodyContainer />
      </GitUserApiProvider>
    </>
  );
}

export default App;
