import styled from "styled-components";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

import img from "../img1.jpg";

const Img = styled.img`
  height: 100%;
  width: 100%;
`;

const FirstImgComponent = ({ firstRef, secondRef }) => {
  const onFunctionDispatch = ({ ...props }) => {
    const { state } = props;

    // console.log(props);
    // console.log(firstRef.current);
    firstRef.current.setTransform(
      state.positionX,
      state.positionY,
      state.scale
    );
  };

  return (
    <TransformWrapper
      ref={secondRef}
      onPanning={onFunctionDispatch}
      onZoom={onFunctionDispatch}
    >
      <TransformComponent wrapperStyle={{ border: "6px solid black" }}>
        <Img src={img} alt="test" />
      </TransformComponent>
    </TransformWrapper>
  );
};

export default FirstImgComponent;