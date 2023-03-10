import styled from 'styled-components';

const StyledMap = styled.div`
  position: relative;
  height: auto;
  margin-bottom: var(--main-card-margin);

  img {
    width: 100%;
    height: 100%;
  }

  button {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
  }
`;

export default StyledMap;
