import { Checkpoint } from '../../models/Checkpoint';
import StyledTrackingEvent from './StyledTrackingEvent';
import Icon from '../../Icon/Icon';
import iconStatusMapping from '../../constants/icon-status-mapping';
import StyledSubHeading from '../../shared/StyledSubHeading';

const iconSize = 24;

interface Props {
  event: Checkpoint;
}
const TrackingEvent = ({ event }: Props) => {
  return (
    <StyledTrackingEvent>
      <div className="tracking-status-indicator-line" />
      <div className="tracking-status-indicator-point" />
      <div className="tracking-status-icon">
        <Icon
          name={iconStatusMapping[event.status]}
          width={iconSize}
          height={iconSize}
          color={'var(--main-grey-color)'}
        />
      </div>

      <div className="tracking-status-info">
        <div className="tracking-status-info-date">{event.event_timestamp}</div>
        <StyledSubHeading>{event.status}</StyledSubHeading>
        <div className="tracking-status-info-date">{event.status_details}</div>
        <div>
          {event.city} ({event.country_iso3})
        </div>
      </div>
    </StyledTrackingEvent>
  );
};

export default TrackingEvent;
