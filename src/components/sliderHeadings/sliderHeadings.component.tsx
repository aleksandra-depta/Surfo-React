import { Col, Row } from "react-bootstrap";
import { Tours } from "../../models/tours";
import { Headings, Slider } from "./sliderHeadings.styles";
import { HeadingH2 } from "../../styled/typography";
import { ButtonRawWhite } from "../../styled/buttons";

const SliderHeadings = ({
  headingTop,
  headingBottom,
}: {
  headingTop: string;
  headingBottom: string;
}) => {
  return (
    <>
      <Headings>
        <Col>
          <HeadingH2>{headingTop}</HeadingH2>
          <HeadingH2>{headingBottom}</HeadingH2>
        </Col>
        <ButtonRawWhite
          to="/offer"
          onClick={() => {
            window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
          }}
        >
          check offers
        </ButtonRawWhite>
      </Headings>
    </>
  );
};

export default SliderHeadings;
