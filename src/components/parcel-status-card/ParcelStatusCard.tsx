import Icon from '../../Icon/Icon';
import { Checkpoint } from '../../models/Checkpoint';
import StyledStatusCard from './StyledStatusCard';
import iconStatusMapping from '../../constants/icon-status-mapping';

const iconSize = 48;

interface Props {
  checkpoint: Checkpoint;
}

const ParcelStatusCard = ({ checkpoint }: Props) => {
  return (
    <StyledStatusCard>
      <div className="current-status">
        <Icon
          className="current-status-icon"
          name={iconStatusMapping[checkpoint.status]}
          width={iconSize}
          height={iconSize}
          color={'var(--main-deep-blue-color)'}
        />
        {checkpoint.status}
      </div>
      <div className="status-description">{checkpoint.status_details}</div>
    </StyledStatusCard>
  );
};

export default ParcelStatusCard;
