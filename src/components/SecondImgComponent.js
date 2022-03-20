import styled from "styled-components";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

import img from "../img2.jpg";

const Img = styled.img`
  height: 100%;
  width: 100%;
`;

const SecondImgComponent = ({ firstRef, secondRef }) => {
  const onFunctionDispatch = ({ ...props }) => {
    const { state } = props;

    secondRef.current.setTransform(
      state.positionX,
      state.positionY,
      state.scale
    );
  };
  return (
    <TransformWrapper
      ref={firstRef}
      onPanning={onFunctionDispatch}
      onZoom={onFunctionDispatch}
    >
      <TransformComponent wrapperStyle={{ border: "6px solid black" }}>
        <Img src={img} alt="test" />
      </TransformComponent>
    </TransformWrapper>
  );
};

export default SecondImgComponent;
