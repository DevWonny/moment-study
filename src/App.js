import Main from "./view/Main";
import Footer from "./components/Footer";
import Memo from "./view/Memo";

import styled from "styled-components";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Wrap>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/memo/:id" element={<Memo />} />
        </Routes>
      </BrowserRouter>
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
