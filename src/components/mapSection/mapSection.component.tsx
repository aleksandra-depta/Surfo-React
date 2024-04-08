import Map from "../map/map.component";
import { Tour } from "../../models/tour";
import {
  Description,
  Link,
  MapContainer,
  MapDescription,
} from "./mapSection.styles";

const MapSection = ({ tour }: { tour: Tour }) => {
  return (
    <MapContainer>
      <MapDescription>
        <Link>
          <b>{tour.startAndEndPoint}</b>
        </Link>
        <Description>
          {tour.stopPoints.map((point) => {
            return <Link key={point}>{point} </Link>;
          })}
        </Description>
        <Link>
          <b>{tour.startAndEndPoint}</b>
        </Link>
      </MapDescription>
      <Map tour={tour} />
    </MapContainer>
  );
};

export default MapSection;
