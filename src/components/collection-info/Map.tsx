import StyledButton, { ButtonType } from '../../shared/StyledButton';
import StyledMap from './StyledMap';

interface Props {
  mapData: any;
}

const Map = ({ mapData }: Props) => {
  const onGetDirectionHandler = () => {
    // TODO: redirect to location (mapData.pickup_address_link)
  };

  return (
    <StyledMap>
      <img src={mapData?.pickup_address_map_url} />

      <StyledButton buttonType={ButtonType.PRIMARY} onClick={onGetDirectionHandler}>
        GET DIRECTION
      </StyledButton>
    </StyledMap>
  );
};

export default Map;
