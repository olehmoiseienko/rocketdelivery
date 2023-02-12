import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useOrderContext } from '../../provider/OrderProvider';
import { routes } from '../../constants/routes';
import StyledCard from '../../shared/StyledCard';
import mocks from '../../mocks/orders.json';
import TrackingNumber from '../tracking-number/TrackingNumber';
import ParcelStatusCard from '../parcel-status-card/ParcelStatusCard';
import Order from '../../models/Order';
import TrackingEventsContainer from '../tracking-events/TrackingEventsContainer';
import TrackingEvent from '../tracking-events/TrackingEvent';
import CollectionInfoContainer from '../collection-info/CollectionInfoContainer';
import AddressInfoCard from '../collection-info/AddressInfoCard';
import Map from '../collection-info/Map';
import ArticlesContainer from '../articles/ArticlesContainer';
import ArticleCard from '../articles/ArticleCard';
import CheckpointStatus from '../../constants/CheckpointStatus';

// const currentOrder = mocks[2] as Order;

const OrderView = () => {
  const navigate = useNavigate();
  const { currentOrder, resetOrderData } = useOrderContext();

  const isAddressInfo =
    currentOrder?.checkpoints[0].status === CheckpointStatus.READY_FOR_COLLECTION &&
    currentOrder?.checkpoints[0]?.meta?.pickup_address;

  useEffect(() => {
    if (!currentOrder) {
      navigate(`${routes.login}`);
    }

    return () => resetOrderData();
  }, []);
  return (
    <>
      <StyledCard>
        {currentOrder &&
          <>
            <TrackingNumber number={currentOrder?.tracking_number} />
            <ParcelStatusCard checkpoint={currentOrder?.checkpoints[0]} />
            <TrackingEventsContainer>
              {currentOrder?.checkpoints.map((event) => (
                <TrackingEvent key={event.event_timestamp} event={event} />
              ))}
            </TrackingEventsContainer>

            {isAddressInfo && (
              <CollectionInfoContainer>
                <AddressInfoCard
                  courier={currentOrder.courier}
                  addressInfo={currentOrder.checkpoints[0].meta}
                />
                <Map mapData={currentOrder.checkpoints[0].meta} />
              </CollectionInfoContainer>
            )}

            {currentOrder?.delivery_info?.articles && (
              <ArticlesContainer>
                {currentOrder.delivery_info.articles.map((item) => (
                  <ArticleCard key={item.articleNo} article={item} />
                ))}
              </ArticlesContainer>
            )}
          </>
        }
      </StyledCard>
    </>
  );
};

export default OrderView;
