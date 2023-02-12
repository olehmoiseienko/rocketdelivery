import React from 'react';
import { render, screen } from '@testing-library/react';
import ArticleCard from '../ArticleCard';
import Article from '../../../models/Article';
import { getArticlePriceAndQuantityText, testIds } from '../../../tests/base-helper';

const articleMock: Article = {
  articleNo: 'AB20129',
  articleName: 'Magsafe Charger for Apple iPhone',
  articleImageUrl: 'https://images.unsplash.com/photo-1615526675159-e248c3021d3f',
  quantity: 1,
  price: 49.0
};

describe('ArticleCard', () => {
  it('renders', () => {
    const expectedPriceAndQuantityText = getArticlePriceAndQuantityText(
      articleMock.price,
      articleMock.quantity
    );

    render(<ArticleCard article={articleMock} />);

    expect(screen.getByText(`Article: ${articleMock.articleNo}`)).toBeInTheDocument();
    expect(screen.getByText(articleMock.articleName)).toBeInTheDocument();
    expect(screen.getByText(expectedPriceAndQuantityText)).toBeInTheDocument();
    expect(screen.queryByTestId(testIds.articleImage)).toBeTruthy();
    expect(screen.queryByTestId(testIds.articleImagePlaceholder)).toBeFalsy();
  });

  it('renders image placeholder', () => {
    const articleMockWithoutImage = {
      ...articleMock,
      articleImageUrl: null
    };

    render(<ArticleCard article={articleMockWithoutImage} />);

    expect(screen.queryByTestId(testIds.articleImage)).toBeFalsy();
    expect(screen.queryByTestId(testIds.articleImagePlaceholder)).toBeTruthy();
  });
});
