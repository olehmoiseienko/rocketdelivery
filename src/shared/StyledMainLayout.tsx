import styled from 'styled-components';

const StyledMainLayout = styled.main`
  display: grid;
  height: calc(100% - 50px);
  //padding-top: 200px;
  //display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--main-bg-color);
  overflow: auto;
`;

export default StyledMainLayout;
