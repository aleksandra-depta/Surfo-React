import type { Tour } from "../../models/tour";
import IonIcon from "@reacticons/ionicons";
import Map from "../map/map.component";

import { Col } from "react-bootstrap";
import {
  DescriptionContainer,
  DescriptionContent,
  DescriptionRow,
  ItemRow,
  MapContent,
  MapDescription,
} from "./cardTourDescription.styles";
import { TextMedium, TextSmall } from "../../styled/typography";
import { IconCheckmark, IconPin } from "../../styled/icons";

const CardTourDescription = ({ tour }: { tour: Tour }) => {
  return (
    <DescriptionContainer>
      <DescriptionContent>
        <TextSmall>{tour.description}</TextSmall>
        <DescriptionRow>
          {tour.descriptionCheckPoints.map((point) => {
            return (
              <ItemRow key={point}>
                <IconCheckmark>
                  <IonIcon size="large" name="checkmark-outline" />
                </IconCheckmark>
                <TextMedium>{point}</TextMedium>
              </ItemRow>
            );
          })}
        </DescriptionRow>
      </DescriptionContent>

      <MapContent>
        <MapDescription>
          <Col>
            <ItemRow>
              <IonIcon size="large" name="caret-forward-circle-outline" />
              <TextMedium>
                <b>{tour.startAndEndPoint}</b>
              </TextMedium>
            </ItemRow>
          </Col>
          <Col>
            {tour.stopPoints.map((point) => {
              return (
                <ItemRow key={point}>
                  <IconPin>
                    <IonIcon size="large" name="pin" />
                  </IconPin>
                  <TextMedium>{point} </TextMedium>
                </ItemRow>
              );
            })}
          </Col>
          <Col>
            <ItemRow>
              <IonIcon size="large" name="stop-circle-outline" />
              <TextMedium>
                <b>{tour.startAndEndPoint}</b>
              </TextMedium>
            </ItemRow>
          </Col>
        </MapDescription>
        <Map tour={tour} />
      </MapContent>
    </DescriptionContainer>
  );
};

export default CardTourDescription;
