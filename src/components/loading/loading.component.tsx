import { ThreeDots } from "react-loader-spinner";
import { Container } from "./loading.styled";

const Loading = () => {
  return (
    <Container>
      <ThreeDots
        visible={true}
        height="80"
        width="80"
        color="#161616"
        radius="9"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </Container>
  );
};

export default Loading;
