import { ReactNode } from 'react';
import StyledHeading from '../../shared/StyledHeading';

interface Props {
  children: ReactNode;
}
const CollectionInfoContainer = ({ children }: Props) => {
  return (
    <div>
      <StyledHeading>You can collect here</StyledHeading>
      {children}
    </div>
  );
};

export default CollectionInfoContainer;
