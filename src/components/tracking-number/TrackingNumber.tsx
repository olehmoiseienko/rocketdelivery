import StyledHeading from '../../shared/StyledHeading';

interface Props {
  number: string;
}

const TrackingNumber = ({ number }: Props) => {
  return <StyledHeading> Tracking ID: {number}</StyledHeading>;
};

export default TrackingNumber;
