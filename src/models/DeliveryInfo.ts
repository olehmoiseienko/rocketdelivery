import Article from './Article';

interface DeliveryInfo {
  articles: Article[];
  orderNo: string;
  order_date: string;
  recipient: string;
  recipient_notification: string;
  email: string;
  street: string;
  city: string;
  region: string;
  timezone: string;
  announced_delivery_date: string;
}

export default DeliveryInfo;
