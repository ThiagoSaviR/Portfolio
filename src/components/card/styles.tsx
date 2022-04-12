import styled from "styled-components"; 

export const WrapperCard = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  position: relative;
  div.card {
    position: relative;
    margin: 15px;
    cursor: pointer;
  }
  div.card .face {
    width: 250px;
    height: 150px;
    transition: 0.5s;
    filter: drop-shadow(3px 3px 8px #000);
  }
  div.card:hover .face {
    width: 290px;
    filter: none;
   
  }
  div.card .face.face1 {
    position: relative;
    background: #171210;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1;
    transform: translateY(100px);
  }
  div.card:hover .face.face1 {
    background: #f0803c;
    transform: translateY(0);
    border-radius: 10px 10px 0 0;
  }
  div.card .face.face1 .cardContent {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: -50px;
    transition: 0.5s;
  }
  div.card .face.face1 .cardContent img {
    width: 150px;
    height: 100px;
    border-radius: 5px;
  }
  div.card .face.face1 .cardContent h3 {
    margin: 10px 0 0;
    color: #d4d4d4;
    text-align: center;
    font-size: 1.5em;
  }
  div.card .face.face2 {
    position: relative;
    background: #d4d4d4;
    display: flex;
    justify-content: center;
    align-items: center;
    transform: translateY(-50px);
  }
  div.card:hover .face.face2 {
    transform: translateY(-6px);
    border-radius: 0 0 10px 10px;
  }


  div.card .face.face2 .cardContent {
    padding: 20px;
  }


  div.card .face.face2 .cardContent a{
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    font-weight: 900;
    color: #333;
    padding: 5px;
    border: 2px solid #f0803c;
    transition: 0.8s;
  }
  div.card .face.face2 .cardContent a:hover {
    border: none;
    border-radius: 10px;
    background: #f0803c;
    color: #d4d4d4;
  }
`;