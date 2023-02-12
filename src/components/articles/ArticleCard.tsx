import StyledArticleCard from './StyledArticleCard';
import StyledSubHeading from '../../shared/StyledSubHeading';
import { ValidIcons } from '../../Icon/icons';
import Icon from '../../Icon/Icon';
import Article from '../../models/Article';

const currency = '$';

interface Props {
  article: Article;
}
const ArticleCard = ({ article }: Props) => {
  return (
    <StyledArticleCard>
      <div className="article-card-image">
        {article.articleImageUrl ? (
          <img data-testid="article-image" src={article.articleImageUrl} />
        ) : (
          <Icon
            width={100}
            height={100}
            name={ValidIcons.Placeholder}
            data-testid="article-image-placeholder"
          />
        )}
      </div>

      <div>
        <StyledSubHeading>{article.articleName}</StyledSubHeading>
        <div className="article-card-number">Article: {article.articleNo}</div>
        <div className="article-card-price">
          {article.price}
          {currency} x {article.quantity}
        </div>
      </div>
    </StyledArticleCard>
  );
};

export default ArticleCard;
