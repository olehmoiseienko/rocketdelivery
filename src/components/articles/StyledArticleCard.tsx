import styled from 'styled-components';

const StyledArticleCard = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  text-align: left;
  padding: 5px 10px;
  margin-bottom: var(--main-card-margin);
  border: 1px solid var(--main-border-color);
  border-radius: var(--border-radius-default);

  .article-card-image {
    width: 100px;
    margin-right: var(--main-card-margin);

    img {
      width: 100%;
      height: 100%;
    }
  }

  .article-card-number {
    color: var(--main-dark-grey-color);
    padding-bottom: 6px;
    font-size: var(--font-size-default);
  }

  .article-card-price {
    font-weight: 600;
  }
`;

export default StyledArticleCard;
