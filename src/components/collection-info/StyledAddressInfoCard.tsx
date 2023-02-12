import styled from 'styled-components';

const StyledAddressInfoCard = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-bottom: var(--main-card-margin);

  .address-info-courier {
    font-weight: bold;
    text-transform: uppercase;
    margin-bottom: 8px;
  }
`;

export default StyledAddressInfoCard;
