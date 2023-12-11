import { ErrorMessage } from "../../styled/inputs";

const ErrorMessageInput = ({ message }: { message?: string }) => {
  return (
    <ErrorMessage>
      {message ? message : "Something is not right. Please try again"}
    </ErrorMessage>
  );
};

export default ErrorMessageInput;
