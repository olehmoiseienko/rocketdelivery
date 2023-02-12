import CheckpointStatus from './CheckpointStatus';
import { ValidIcons } from '../Icon/icons';

const iconStatusMapping: Record<CheckpointStatus, ValidIcons> = {
  [CheckpointStatus.IN_TRANSIT]: ValidIcons.IN_TRANSIT,
  [CheckpointStatus.REGISTERED]: ValidIcons.REGISTERED,
  [CheckpointStatus.NEW_DELIVERY_DATE_SET]: ValidIcons.WARNING,
  [CheckpointStatus.FAILED_DELIVERY_ATTEMPT]: ValidIcons.WARNING,
  [CheckpointStatus.READY_FOR_COLLECTION]: ValidIcons.DELIVERED
};

export default iconStatusMapping;
