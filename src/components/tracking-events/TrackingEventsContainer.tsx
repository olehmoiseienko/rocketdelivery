import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}
const TrackingEventsContainer = ({ children }: Props) => {
  return <div>{children}</div>;
};

export default TrackingEventsContainer;
