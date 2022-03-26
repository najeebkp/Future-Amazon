import React from "react";
import styled, { keyframes } from "styled-components";
import { SpinnerIos } from "@styled-icons/fluentui-system-regular/SpinnerIos";

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const SpinningIcon = styled(SpinnerIos)`
  animation: 1s linear ${spin} infinite;
  color: #1df7a0 !important;
`;

function Loading() {
  return (
    <div className="justify-content-center d-flex align-items-center h-100">
      <SpinningIcon size={50} />
    </div>
  );
}

export default Loading;
