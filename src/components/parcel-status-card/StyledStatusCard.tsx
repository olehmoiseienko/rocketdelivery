import styled from 'styled-components';

const StyledStatusCard = styled.div`
  width: auto;
  padding: 12px;
  border: 1px solid var(--main-border-color);
  border-radius: var(--border-radius-default);
  background-color: var(--main-light-grey-color);

  .current-status {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    text-align: left;
    font-size: var(--font-size-xl);
    color: var(--main-deep-blue-color);

    .current-status-icon {
      margin-right: 15px;
    }
  }

  .status-description {
    text-align: left;
    font-weight: 600;
    font-size: var(--font-size-sm);
    color: var(--main-dark-grey-color);
  }
`;

export default StyledStatusCard;
