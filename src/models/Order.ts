import CourierCode from '../constants/CourierCode';
import CountryISO3 from '../constants/CountryISO3';
import { Checkpoint } from './Checkpoint';
import DeliveryInfo from './DeliveryInfo';

interface Order {
  _id: string;
  courier: CourierCode;
  tracking_number: string;
  created: string;
  updated: string;
  checkpoints: Checkpoint[];
  delivery_info: DeliveryInfo;
  destination_country_iso3: CountryISO3;
  zip_code: string;
}

export default Order;
