import styled from "styled-components";
import { useEffect, useRef } from "react";
import {
  TransformWrapper,
  TransformComponent,
  ReactZoomPanPinchRef,
} from "react-zoom-pan-pinch";

import img from "../img1.jpg";

const Img = styled.img`
  height: 100%;
  width: 100%;
`;

const ThirdImgComponent = ({ func1, transformState }) => {
  const ref = useRef();

  useEffect(() => {
    if (transformState) {
      ref.current.setTransform(
        transformState.positionX,
        transformState.positionY,
        transformState.scale
      );
    }
  }, [transformState]);

  const onFunctionDispatch = ({ ...props }) => {
    const { state } = props;
    func1({ ...state });
  };

  return (
    <TransformWrapper
      ref={ref}
      onPanning={onFunctionDispatch}
      onZoom={onFunctionDispatch}
    >
      <TransformComponent wrapperStyle={{ border: "6px solid black" }}>
        <Img src={img} alt="test" />
      </TransformComponent>
    </TransformWrapper>
  );
};

export default ThirdImgComponent;
