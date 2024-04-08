import type { Tour } from "../../models/tour";
import { Container, Description } from "./cardTourDescription.styles";
import { TextMedium } from "../../styled/typography";
import { IconCheckmark } from "../../styled/icons";
import IonIcon from "@reacticons/ionicons";

const CardTourDescription = ({ tour }: { tour: Tour }) => {
  return (
    <Container>
      <Description>
        {tour.descriptionCheckPoints.map((point) => {
          return (
            <div key={point}>
              <IconCheckmark>
                <IonIcon size="large" name="checkmark-outline" />
              </IconCheckmark>
              <TextMedium>{point}</TextMedium>
            </div>
          );
        })}
      </Description>
    </Container>
  );
};

export default CardTourDescription;
