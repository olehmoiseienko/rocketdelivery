import React from 'react';
import styled from 'styled-components';

const LoaderWrapper = styled.div`
  .spinner-wrapper {
    position: relative;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .spinner {
    animation: rotate 2s linear infinite;
    z-index: 2;
    width: 35px;
    height: 35px;
  }

  .spinner .path {
    stroke: hsl(210, 70%, 75%);
    stroke-linecap: round;
    animation: dash 1.5s ease-in-out infinite;
  }

  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes dash {
    0% {
      stroke-dasharray: 1, 150;
      stroke-dashoffset: 0;
    }
    50% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -35;
    }
    100% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -124;
    }
  }
`;

const StyledLoader = () => {
  return (
    <LoaderWrapper>
      <div className={'spinner-wrapper'}>
        <svg className="spinner" viewBox="0 0 50 50">
          <circle className="path" cx="25" cy="25" r="20" fill="none" strokeWidth="5"></circle>
        </svg>
      </div>
    </LoaderWrapper>
  );
};

export default StyledLoader;
