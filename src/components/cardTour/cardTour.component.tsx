import type { Tour } from "../../models/tour";
import { HeadingH2, TextSmall } from "../../styled/typography";
import { Container, Column, Content } from "./cardTour.styles";

const CardTour = ({ tour }: { tour: Tour }) => {
  const detailsDescription = [
    {
      name: "Max group size",
      content: tour.maxGroupSize,
    },
    {
      name: "Operated in",
      content: tour.languages,
    },
    {
      name: "Min age",
      content: tour.minGroupSize,
    },
    {
      name: "Food",
      content: tour.food,
    },
    {
      name: "Sleeping",
      content: tour.sleeping,
    },
    {
      name: "Stops",
      content: tour.stops.map((stop) => {
        return <span key={stop}>{stop}</span>;
      }),
    },
  ];

  return (
    <Container>
      <Content>
        <Column>
          <TextSmall>Start & End</TextSmall>
          <HeadingH2>{tour.startAndEndPoint}</HeadingH2>
        </Column>
        <Column>
          <TextSmall>Days</TextSmall>
          <HeadingH2>{tour.days} days</HeadingH2>
        </Column>
        {detailsDescription.map((el) => (
          <Column key={el.name}>
            <TextSmall>{el.name}</TextSmall>
            <HeadingH2>{el.content}</HeadingH2>
          </Column>
        ))}
      </Content>
    </Container>
  );
};

export default CardTour;
