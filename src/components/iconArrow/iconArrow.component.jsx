import { IconArrow } from "./iconArrow.styles";

const IconArrowC = ({ refName }) => {
  return (
    <IconArrow
      onClick={() => {
        refName.current.scrollIntoView({
          behavior: "smooth",
        });
      }}
    >
      <ion-icon size="large" name="chevron-down-outline"></ion-icon>
    </IconArrow>
  );
};

export default IconArrowC;
