import { useRef } from "react";

import Map from "../../components/map/map.component";
import Reviews from "../../components/reviews/reviews.component";
import Comments from "../../components/comments/comments.component";
import Footer from "../../components/footer/footer.component";
import CardTour from "../../components/cardTour/cardTour.component";
import IconArrowC from "../../components/iconArrow/iconArrow.component";

import { Col } from "react-bootstrap";
import { TextMedium, TextSmall } from "../../styled/typography";
import { IconCheckmark, IconPin } from "../../styled/icons";
import {
  CardSection,
  DescriptionContainer,
  DescriptionContent,
  DescriptionRow,
  ItemRow,
  MapContent,
  MapDescription,
  Section,
} from "./tour.styles";

const TourPage = ({ tour }) => {
  const sectionCard = useRef(null);
  const sectionDescription = useRef(null);
  const sectionReview = useRef(null);
  const sectionComment = useRef(null);

  return (
    <>
      <CardSection>
        <CardTour tour={tour} />
        <IconArrowC refName={sectionDescription} />
      </CardSection>

      <Section ref={sectionDescription}>
        <DescriptionContainer>
          <DescriptionContent>
            <TextSmall>{tour.description}</TextSmall>
            <DescriptionRow>
              {tour.descriptionCheckPoints.map((point) => {
                return (
                  <ItemRow key={point}>
                    <IconCheckmark>
                      <ion-icon
                        size="large"
                        name="checkmark-outline"
                      ></ion-icon>
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
                  <ion-icon
                    size="large"
                    name="caret-forward-circle-outline"
                  ></ion-icon>
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
                        <ion-icon size="large" name="pin"></ion-icon>
                      </IconPin>
                      <TextMedium>{point} </TextMedium>
                    </ItemRow>
                  );
                })}
              </Col>
              <Col>
                <ItemRow>
                  <ion-icon size="large" name="stop-circle-outline"></ion-icon>
                  <TextMedium>
                    <b>{tour.startAndEndPoint}</b>
                  </TextMedium>
                </ItemRow>
              </Col>
            </MapDescription>
            <Map tour={tour} />
          </MapContent>
        </DescriptionContainer>
        <IconArrowC refName={sectionReview} />
      </Section>

      <Section ref={sectionReview}>
        <Reviews tour={tour} />
        <IconArrowC refName={sectionComment} />
      </Section>
      <Section ref={sectionComment}>
        <Comments tour={tour} />
      </Section>
      <Footer />
    </>
  );
};

export default TourPage;
