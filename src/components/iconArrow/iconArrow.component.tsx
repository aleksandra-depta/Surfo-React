import IonIcon from "@reacticons/ionicons";
import { IconArrow } from "./iconArrow.styles";

const IconArrowC = ({
  refName,
}: {
  refName: React.RefObject<HTMLDivElement>;
}) => {
  return (
    <IconArrow
      onClick={() => {
        refName.current?.scrollIntoView({
          behavior: "smooth",
        });
      }}
    >
      <IonIcon size="large" name="chevron-down-outline" />
    </IconArrow>
  );
};

export default IconArrowC;
