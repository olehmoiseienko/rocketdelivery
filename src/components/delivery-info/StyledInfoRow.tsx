import styled from 'styled-components';

const StyledInfoRow = styled.div`
  display: flex;
  justify-content: space-between;
  text-align: left;
  margin-top: 10px;
  font-size: var(--font-size-sm);

  > div {
    flex-grow: 10;
    padding: 0 var(--main-card-margin);

    &:first-child {
      width: 140px;
      flex-grow: 1;
      color: var(--main-dark-grey-color);
    }
  }
`;

export default StyledInfoRow;
