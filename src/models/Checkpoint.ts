import CheckpointStatus from '../constants/CheckpointStatus';
import CountryISO3 from '../constants/CountryISO3';

export type Checkpoint =
  | RegisteredCheckpoint
  | InTransitCheckpoint
  | ReadyForCollectionCheckpoint
  | FailedDeliveryAttemptCheckpoint
  | NewDeliveryDateCheckpoint;

export interface BaseCheckpoint {
  status_details: string;
  event_timestamp: string;
  status: CheckpointStatus;
  country_iso3: CountryISO3;
  city: string;
  meta?: {
    [key: string]: string;
  };
}

export interface RegisteredCheckpoint extends BaseCheckpoint {
  status: CheckpointStatus.REGISTERED;
}

export interface InTransitCheckpoint extends BaseCheckpoint {
  status: CheckpointStatus.IN_TRANSIT;
}

export interface FailedDeliveryAttemptCheckpoint extends BaseCheckpoint {
  status: CheckpointStatus.FAILED_DELIVERY_ATTEMPT;
}

export interface NewDeliveryDateCheckpoint extends BaseCheckpoint {
  status: CheckpointStatus.NEW_DELIVERY_DATE_SET;
  meta: {
    delivery_date: string;
    delivery_time_frame_from: string;
    delivery_time_frame_to: string;
  };
}

export interface ReadyForCollectionCheckpoint extends BaseCheckpoint {
  status: CheckpointStatus.READY_FOR_COLLECTION;
  meta: {
    pickup_address: string;
    pickup_address_link: string;
    pickup_address_map_url: string;
  };
}
