import { fireEvent } from '@testing-library/react';
import { screen } from '@testing-library/react';

const currency = '$';

export const testIds = {
  articleImage: 'article-image',
  articleImagePlaceholder: 'article-image-placeholder',
  ordernumber: 'ordernumber',
  zipcode: 'zipcode'
};

export const getArticlePriceAndQuantityText = (price: number, quantity: number) => {
  return `${price}${currency} x ${quantity}`;
};

export const fillInByTestId = async (testId: string, value: string): Promise<boolean> => {
  return fireEvent.change(await screen.findByTestId(testId), {
    target: { value }
  });
};
