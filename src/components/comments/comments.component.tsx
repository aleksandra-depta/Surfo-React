import { useState } from "react";
import { useAppSelector } from "../../hooks";
import { Tour } from "../../models/tour";
import {
  useAddCommentMutation,
  useDeleteCommentMutation,
  useGetCommentsQuery,
} from "../../services/toursApi";
import IonIcon from "@reacticons/ionicons";

import { TextMedium } from "../../styled/typography";
import {
  ButtonComment,
  CloseIcon,
  CommentContainer,
  Content,
  ContentDetails,
  FormComment,
  ImageUser,
  List,
  TextareaComment,
  UserName,
} from "./comments.styles";

import UserDefault from "../../img/user.png";
import LoginMessage from "../loginMessage/loginMessage.component";

const Comments = ({ tour }: { tour: Tour }) => {
  const { currentUser } = useAppSelector((store) => store.auth);

  const { data: commentsOnTour, isSuccess } = useGetCommentsQuery(tour._id);

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

  const [deletePost] = useDeleteCommentMutation();

  return (
    <>
      {currentUser !== null ? (
        <FormComment>
          <ImageUser src={UserDefault} alt="user default" loading="lazy" />
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
            <ButtonComment
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
            </ButtonComment>
          </ContentDetails>
        </FormComment>
      ) : (
        <LoginMessage
          message={
            "Log in or Sign up if you want to send us review or add comment!"
          }
        />
      )}
      {isSuccess && (
        <List>
          {commentsOnTour.comments.map((comment) => {
            return (
              <CommentContainer key={comment._id}>
                <ImageUser
                  src={require(`../../img/u/${comment.user.photo}`)}
                  alt="user"
                  loading="lazy"
                />
                <Content>
                  <UserName>{comment.user.name?.split(" ")[0]}</UserName>
                  <TextMedium>{comment.comment}</TextMedium>
                  {currentUser && comment.user._id === currentUser._id && (
                    <CloseIcon
                      onClick={() => {
                        deletePost(comment._id);
                      }}
                    >
                      <IonIcon size="large" name="trash-outline" />
                    </CloseIcon>
                  )}
                </Content>
              </CommentContainer>
            );
          })}
        </List>
      )}
    </>
  );
};

export default Comments;
