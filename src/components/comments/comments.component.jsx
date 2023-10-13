import { useState, useEffect, useContext } from "react";
import { UserContext } from "../../contexts/user.context";

import { useSelector } from "react-redux";
import {
  useAddCommentMutation,
  useDeleteCommentMutation,
  useGetCommentsQuery,
} from "../../services/toursApi";
import Cookies from "universal-cookie";

import UserDefault from "../../img/user.png";
import { HeadingH3, TextMedium } from "../../styled/typography";
import { ButtonPrimary } from "../../styled/buttons";
import {
  ButtonComment,
  CloseIcon,
  CommentContainer,
  Content,
  FormComment,
  ImageUser,
  InfoContainer,
  List,
  TextareaComment,
  UserName,
} from "./comments.styles";

const cookies = new Cookies();

const Comments = ({ tour }) => {
  const {
    data: commentsOnTour,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetCommentsQuery(tour._id);

  const { currentUser } = useSelector((store) => store.auth);

  let comments;
  if (isSuccess) {
    comments = commentsOnTour.data.comments;
  }

  const [addComment] = useAddCommentMutation();

  const [formState, setFormState] = useState({
    comment: "",
    user: currentUser._id,
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
      {currentUser ? (
        <FormComment>
          <ImageUser src={UserDefault} alt="user default" />
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
        </FormComment>
      ) : (
        <InfoContainer>
          <HeadingH3>
            Log in or Sign up if you want to send us review or add comment!
          </HeadingH3>
          <ButtonPrimary to="/login">Click here</ButtonPrimary>
        </InfoContainer>
      )}
      {isSuccess && (
        <List id={1}>
          {comments.map((comment) => {
            return (
              <CommentContainer key={comment._id}>
                <ImageUser
                  src={require(`../../img/u/${comment.user.photo}`)}
                  alt="user"
                />
                <Content>
                  <UserName>{comment.user.name.split(" ")[0]}</UserName>
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
