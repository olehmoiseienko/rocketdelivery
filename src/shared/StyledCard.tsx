import styled from 'styled-components';

const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 300px;
  max-width: 400px;
  margin: 15px;
  padding: 45px 15px;
  border: 1px solid var(--main-border-color);
  border-radius: var(--border-radius-default);
  background-color: var(--main-white-color);

  > div {
    margin-top: 15px;
  }
`;

export default StyledCard;
