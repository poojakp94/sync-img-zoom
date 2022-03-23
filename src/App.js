import styled from "styled-components";
import { useState } from "react";

import FirstImgComponent from "./components/FirstImgcomponent";
import SecondImgComponent from "./components/SecondImgComponent";

// import ThirdImgComponent from "./components/ThirdImgComponent";
const Wrapper = styled.section`
  // border: 2px solid red;
  display: flex;
  gap: 15px;
  padding: 10px;
`;

function App() {
  const [getTransformState, setTransformState] = useState(null);

  return (
    <Wrapper>
      <FirstImgComponent
        func1={setTransformState}
        transformState={getTransformState}
      />
      <SecondImgComponent
        func1={setTransformState}
        transformState={getTransformState}
      />
      {/* <ThirdImgComponent
        func1={setTransformState}
        transformState={getTransformState}
      /> */}
    </Wrapper>
  );
}

export default App;
