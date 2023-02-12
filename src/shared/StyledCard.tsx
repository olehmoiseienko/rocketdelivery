import styled from 'styled-components';

const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 300px;
  max-width: 400px;
  margin: var(--main-card-margin);
  padding: 45px var(--main-card-margin);
  border: 1px solid var(--main-border-color);
  border-radius: var(--border-radius-default);
  background-color: var(--main-white-color);

  > div {
    margin-top: var(--main-card-margin);
  }
`;

export default StyledCard;
