import { useEffect } from 'react';
import { useOrderContext } from '../../provider/OrderProvider';
import { useNavigate } from 'react-router-dom';
import { routes } from '../../constants/routes';

const OrderView = () => {
  const navigate = useNavigate();
  const { currentOrder, resetOrderData } = useOrderContext();

  useEffect(() => {
    if (!currentOrder) {
      navigate(`${routes.login}`);
    }

    return () => resetOrderData();
  }, []);

  return (
    <>
      <div>OrderView: {currentOrder && currentOrder.tracking_number}</div>
    </>
  );
};

export default OrderView;
