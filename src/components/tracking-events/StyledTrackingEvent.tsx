import styled from 'styled-components';

const StyledTrackingEvent = styled.div`
  position: relative;
  display: flex;
  padding: 16px 0;
  margin-left: 10px;

  .tracking-status-indicator-line {
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    border-left: 2px dashed var(--main-deep-blue-color);
  }

  .tracking-status-indicator-point {
    position: absolute;
    left: -7px;
    top: 40px;
    bottom: 0;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background-color: var(--main-deep-blue-color);
  }

  &:first-child {
    .tracking-status-indicator-line {
      top: 40px;
    }

    .tracking-status-indicator-point {
      background-color: var(--main-green-color);
    }
  }

  &:last-child {
    .tracking-status-indicator-line {
      bottom: 80px;
    }
  }

  .tracking-status-icon {
    margin: 22px 10px 0 25px;
  }

  .tracking-status-info {
    margin-left: var(--main-card-margin);
    text-align: left;

    .tracking-status-info-date,
    .tracking-status-info-date {
      font-size: var(--font-size-sm);
      color: var(--main-dark-grey-color);
    }
  }
`;

export default StyledTrackingEvent;
