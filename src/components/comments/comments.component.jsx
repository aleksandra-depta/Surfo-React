import { useState } from "react";
import { useSelector } from "react-redux";
import {
  useAddCommentMutation,
  useDeleteCommentMutation,
  useGetCommentsQuery,
} from "../../services/toursApi";

import { HeadingH3, TextMedium } from "../../styled/typography";
import { ButtonPrimary } from "../../styled/buttons";
import {
  ButtonComment,
  CloseIcon,
  CommentContainer,
  Content,
  ContentDetails,
  FormComment,
  ImageUser,
  InfoContainer,
  List,
  TextareaComment,
  UserName,
} from "./comments.styles";

import UserDefault from "../../img/user.png";

const Comments = ({ tour }) => {
  const { currentUser } = useSelector((store) => store.auth);

  const {
    data: commentsOnTour,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetCommentsQuery(tour._id);

  let comments;
  if (isSuccess) {
    comments = commentsOnTour.data.comments;
  }

  const [addComment] = useAddCommentMutation();

  const [formState, setFormState] = useState({
    comment: "",
    user: currentUser !== null ? currentUser._id : null,
    tour: tour._id,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const [deletePost, { isLoading: isDeleting }] = useDeleteCommentMutation();

  return (
    <>
      {currentUser !== null ? (
        <FormComment>
          <ImageUser src={UserDefault} alt="user default" />
          <ContentDetails>
            <TextareaComment
              type="text"
              cols="10"
              maxLength="350"
              placeholder="Your comment"
              name="comment"
              onChange={handleChange}
              required
            ></TextareaComment>
            <ButtonComment
              type="submit"
              onClick={async () => {
                try {
                  await addComment(formState).unwrap();
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
        <InfoContainer>
          <HeadingH3>
            Log in or Sign up if you want to send us review or add comment!
          </HeadingH3>
          <ButtonPrimary to="/login">Click here</ButtonPrimary>
        </InfoContainer>
      )}
      {currentUser !== null && isSuccess && (
        <List id={1}>
          {comments.map((comment) => {
            return (
              <CommentContainer key={comment._id}>
                <ImageUser
                  src={require(`../../img/u/${comment.user.photo}`)}
                  alt="user"
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
                      <ion-icon size="large" name="trash-outline"></ion-icon>
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
