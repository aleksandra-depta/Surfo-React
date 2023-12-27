import { BallTriangle } from "react-loader-spinner";
import { Container } from "./loading.styled";

const Loading = () => {
  return (
    <Container>
      {/* <ColorRing
        visible={true}
        height="80"
        width="80"
        ariaLabel="blocks-loading"
        wrapperStyle={{}}
        wrapperClass="blocks-wrapper"
        colors={["#3a9696", "#3a96967f", "#3a9696cc", "#77c0c0da", "#1ea0a099"]}
      /> */}

      <BallTriangle
        height={100}
        width={100}
        radius={5}
        color="#3a9696cc"
        ariaLabel="ball-triangle-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </Container>
  );
};

export default Loading;
