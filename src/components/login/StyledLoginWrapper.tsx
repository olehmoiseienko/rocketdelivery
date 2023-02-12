import styled from 'styled-components';
import StyledCard from '../../shared/StyledCard';

const StyledLoginWrapper = styled(StyledCard)`
  position: relative;
  flex-direction: column;
  max-width: 400px;
  min-width: 390px;
  border: none;
  padding: 58px 16px;
  font-size: var(--font-size-default);

  button {
    width: 100%;
    font-size: var(--font-size-h1);
    font-weight: 500;
  }
`;

export default StyledLoginWrapper;
