import CourierCode from '../../constants/CourierCode';
import StyledAddressInfoCard from './StyledAddressInfoCard';
import { MetaAddressInfo } from '../../models/Checkpoint';

interface Props {
  courier: CourierCode;
  addressInfo: MetaAddressInfo;
}
const AddressInfoCard = ({ courier, addressInfo }: Props) => {
  return (
    <StyledAddressInfoCard>
      <div className="address-info-courier">{courier} Postfiliale 725</div>
      <div>{addressInfo.pickup_address}</div>
    </StyledAddressInfoCard>
  );
};

export default AddressInfoCard;
