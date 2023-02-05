import React from 'react';

interface Props {
  children: string;
}
const StyledError = ({ children }: Props) => {
  return <>{children}</>;
};

export default StyledError;
