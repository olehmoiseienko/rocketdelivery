import React, { useState, FormEvent, ChangeEvent, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { routes } from '../../constants/routes';
import { useOrderContext } from '../../provider/OrderProvider';
import StyledLoader from '../../shared/StyledLoader';
import StyledError from '../../shared/StyledError';
import { isValidOrderNumber, isValidZipCode } from './validator';

const Login = () => {
  const navigate = useNavigate();
  const { currentOrder, isLoading, error, getOrders } = useOrderContext();
  const [orderNumber, setOrderNumber] = useState<string>('');
  const [zipCode, setZipCode] = useState<string>('');
  const [isFormValid, setIsFormValid] = useState<boolean>(false);

  const validate = () => {
    const isValidForm = isValidOrderNumber(orderNumber) && isValidZipCode(zipCode);
    setIsFormValid(isValidForm);
  };

  useEffect(() => {
    validate();
  }, [orderNumber, zipCode]);

  useEffect(() => {
    if (!error && currentOrder) {
      navigate(`${routes.orderView}`);
    }
  }, [error, currentOrder]);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await getOrders({ orderNumber, zipCode });
  };

  return (
    <>
      {isLoading && <StyledLoader />}
      {error && <StyledError>{error}</StyledError>}
      <form onSubmit={(event) => handleSubmit(event)}>
        <div>
          <label htmlFor="ordernumber">Order Number</label>
          <input
            value={orderNumber}
            type="text"
            id="ordernumber"
            onChange={(e: ChangeEvent<HTMLInputElement>) => setOrderNumber(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="zipcode">Zip Code</label>
          <input
            value={zipCode}
            type="text"
            id="zipcode"
            onChange={(e: ChangeEvent<HTMLInputElement>) => setZipCode(e.target.value)}
          />
        </div>

        <button disabled={!isFormValid}>Track</button>
      </form>
    </>
  );
};

export default Login;
