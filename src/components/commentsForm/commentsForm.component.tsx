import { useState } from "react";
import { useAppSelector } from "../../hooks";
import { Tour } from "../../models/tour";
import { useAddCommentMutation } from "../../services/toursApi";
import LoginMessage from "../loginMessage/loginMessage.component";

import { ButtonBlack } from "../../styled/buttons";
import {
  ContentDetails,
  FormComment,
  TextareaComment,
} from "./commentsForm.styles";

const CommentsForm = ({ tour }: { tour: Tour }) => {
  const { currentUser } = useAppSelector((store) => store.auth);
  const [addComment] = useAddCommentMutation();

  const [formState, setFormState] = useState({
    comment: "",
    user: currentUser !== null ? currentUser._id : null,
    tour: tour._id,
  });
  const [text, setText] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    setText(e.target.value);
  };

  return (
    <>
      {currentUser !== null ? (
        <FormComment>
          <ContentDetails>
            <TextareaComment
              cols={10}
              maxLength={350}
              placeholder="Your comment"
              name="comment"
              onChange={handleChange}
              value={text}
              required
            ></TextareaComment>
            <ButtonBlack
              to=""
              type="submit"
              onClick={async () => {
                try {
                  await addComment(formState).unwrap();
                  setText("");
                } catch (err) {
                  console.log(err);
                }
              }}
            >
              Post it!
            </ButtonBlack>
          </ContentDetails>
        </FormComment>
      ) : (
        <LoginMessage
          message={
            "Log in or Sign up if you want to send us review or add comment!"
          }
        />
      )}
    </>
  );
};

export default CommentsForm;
