import Main from "./view/Main";
import Header from "./components/Header";
import Footer from "./components/Footer";

import styled from "styled-components";

function App() {
  return (
    <Wrap>
      <Header />
      <Main />
      <Footer />
    </Wrap>
  );
}

export default App;

const Wrap = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #0f0f0f;
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
