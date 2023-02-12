import styled from 'styled-components';

const StyledFormRow = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin: 32px 0;

  label {
    text-align: left;
    font-weight: 600;
    font-size: var(--font-size-md);
    margin-bottom: 8px;
  }
`;

export default StyledFormRow;
