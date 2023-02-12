import React from 'react';
import { render, screen, act } from '@testing-library/react';
import { fireEvent } from '@testing-library/react';
import Login from '../../login/Login';
import { MemoryRouter } from 'react-router-dom';
import Provider from '../../../provider/OrderProvider';
import { fillInByTestId, testIds } from '../../../tests/base-helper';

jest.mock('../../../provider/OrderProvider');
const onSubmit = jest.fn();

beforeEach(() => {
  (Provider as unknown as jest.Mock).mockImplementation(() => ({
    currentOrder: null,
    getOrders: onSubmit
  }));
});

describe('Login', () => {
  it('renders', async () => {
    const tree = await render(
      <MemoryRouter initialEntries={['/']}>
        <Login />
      </MemoryRouter>
    );

    expect(tree).toMatchSnapshot();
    expect(await screen.findByText('Order Number')).toBeInTheDocument();
    expect(await screen.findByText('Zip Code')).toBeInTheDocument();
    expect(await screen.findByText('Track')).toBeInTheDocument();
    expect(await screen.findByRole('button')).toBeDisabled();
    expect(tree).toMatchSnapshot();
  });

  it('check that getOrders is called on click submit', async () => {
    await render(
      <MemoryRouter>
        <Login />
      </MemoryRouter>
    );

    await act(async () => {
      await fillInByTestId(testIds.ordernumber, '123456789');
      await fillInByTestId(testIds.zipcode, '12345');
    });

    fireEvent.click(await screen.findByRole('button'));

    expect(onSubmit).toHaveBeenCalled();
  });
});
