import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url("https://images.unsplash.com/photo-1592487501226-7ed5e5dc80f2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80");
  opacity: 0.8;
  width: 100%;
  height: 100vh;
`;

export const BotonIngresar = styled.button`
  font-size: 1.2em;
  color: white;
  background-color: #212121;
  width: fit-content;
  height: 2em;
  border-radius: 5px;
  transition: transform 0.5s;
  box-shadow: 5px 5px 10px 0px rgba(0, 0, 0, 0.75);

  &:hover {
    transform: scale(1.2);
  }
`;
