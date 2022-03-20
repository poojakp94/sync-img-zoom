import styled from "styled-components";
import { useRef } from "react";

import FirstImgComponent from "./components/FirstImgcomponent";
import SecondImgComponent from "./components/SecondImgComponent";

const Wrapper = styled.section`
  // border: 2px solid red;
  display: flex;
  gap: 15px;
  padding: 10px;
`;

function App() {
  const ref1 = useRef();
  const ref2 = useRef();

  return (
    <Wrapper>
      <FirstImgComponent firstRef={ref1} secondRef={ref2} />
      <SecondImgComponent firstRef={ref1} secondRef={ref2} />
    </Wrapper>
  );
}

export default App;
