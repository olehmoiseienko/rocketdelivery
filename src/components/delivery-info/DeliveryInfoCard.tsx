import StyledHeading from '../../shared/StyledHeading';
import StyledInfoRow from './StyledInfoRow';

interface Props {
  deliveryInfo: any;
}

const DeliveryInfoCard = ({ deliveryInfo }: Props) => {
  return (
    <div>
      <StyledHeading>Order Info</StyledHeading>

      <StyledInfoRow>
        <div>Order Number:</div>
        <div>{deliveryInfo.orderNo}</div>
      </StyledInfoRow>

      <StyledInfoRow>
        <div>Order Date:</div>
        <div>{deliveryInfo.order_date}</div>
      </StyledInfoRow>

      <StyledInfoRow>
        <div>Recipient:</div>
        <div>{deliveryInfo.recipient}</div>
      </StyledInfoRow>

      <StyledInfoRow>
        <div>Order Number:</div>
        <div>{deliveryInfo.orderNo}</div>
      </StyledInfoRow>
    </div>
  );
};

export default DeliveryInfoCard;
