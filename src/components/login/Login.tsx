import React, { useState, FormEvent, ChangeEvent, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import routes  from '../../routes';
import { useOrderContext } from '../../provider/OrderProvider';
import StyledLoader from '../../shared/StyledLoader';
import StyledError from '../../shared/StyledError';
import { isValidOrderNumber, isValidZipCode } from './validator';
import StyledLoginWrapper from './StyledLoginWrapper';
import StyledLogoWrapper from './StyledLogoWrapper';
import StyledInput from '../../shared/StyledInput';
import StyledFormRow from '../../shared/StyledFormRow';
import StyledButton, { ButtonType } from '../../shared/StyledButton';
import Logo from '../../shared/Logo';

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
    <StyledLoginWrapper>
      <StyledLogoWrapper>
        <Logo />
      </StyledLogoWrapper>

      <h1>Track your order</h1>

      <p>
        Enter your order number and zip code combination to see the order details and shipping
        updates
      </p>
      {error && <StyledError>{error}</StyledError>}
      <form onSubmit={(event) => handleSubmit(event)}>
        <StyledFormRow>
          <label htmlFor="ordernumber">Order Number</label>
          <StyledInput
            data-testid="ordernumber"
            value={orderNumber}
            type="text"
            id="ordernumber"
            onChange={(e: ChangeEvent<HTMLInputElement>) => setOrderNumber(e.target.value)}
          />
        </StyledFormRow>

        <StyledFormRow>
          <label htmlFor="zipcode">Zip Code</label>
          <StyledInput
            data-testid="zipcode"
            value={zipCode}
            type="text"
            id="zipcode"
            onChange={(e: ChangeEvent<HTMLInputElement>) => setZipCode(e.target.value)}
          />
        </StyledFormRow>

        <StyledButton buttonType={ButtonType.PRIMARY} disabled={!isFormValid}>
          {isLoading ? <StyledLoader /> : <span>Track</span>}
        </StyledButton>
      </form>
    </StyledLoginWrapper>
  );
};

export default Login;
