import StyledArticleCard from './StyledArticleCard';
import StyledSubHeading from '../../shared/StyledSubHeading';
import { ValidIcons } from '../../Icon/icons';
import Icon from '../../Icon/Icon';

const currency = '$';

interface Props {
  article: any;
}
const ArticleCard = ({ article }: Props) => {
  return (
    <StyledArticleCard>
      <div className="article-card-image">
        {article.articleImageUrl ? (
          <img src={article.articleImageUrl} />
        ) : (
          <Icon width={100} height={100} name={ValidIcons.Placeholder} />
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
