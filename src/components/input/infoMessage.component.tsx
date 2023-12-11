import { InfoMessage } from "../../styled/inputs";

const InfoMessageInput = ({ message }: { message?: string }) => {
  return (
    <InfoMessage>
      {message ? message : "This feature has not been implemented yet"}
    </InfoMessage>
  );
};

export default InfoMessageInput;
