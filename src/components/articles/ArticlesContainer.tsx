import { ReactNode } from 'react';
import StyledHeading from '../../shared/StyledHeading';

interface Props {
  children: ReactNode;
}
const ArticlesContainer = ({ children }: Props) => {
  return (
    <div>
      <StyledHeading>Items for collect</StyledHeading>
      {children}
    </div>
  );
};

export default ArticlesContainer;
