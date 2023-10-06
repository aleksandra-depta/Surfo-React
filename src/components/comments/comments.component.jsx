import { useState, useEffect, useContext } from "react";
import { UserContext } from "../../contexts/user.context";

import axios from "axios";
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
  const [comments, setComments] = useState([]);
  const [sendComment, setSendComment] = useState([]);
  const { currentUser } = useContext(UserContext);

  const fetchComments = () => {
    fetch(`http://127.0.0.1:4000/api/v1/tours/${tour._id}/comments`)
      .then((response) => response.json())
      .then((comment) => setComments(comment.data.comments));
  };

  useEffect(() => {
    fetchComments();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = cookies.get("jwt");

    await axios
      .post(
        `http://127.0.0.1:4000/api/v1/comments`,
        {
          comment: `${sendComment}`,
          user: `${currentUser._id}`,
          tour: `${tour._id}`,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then(() => {
        setSendComment("");
        fetchComments();
      });
  };

  const handleRemoveBtn = async (e) => {
    const commentClickedId = e.target.id;
    const token = cookies.get("jwt");

    await axios
      .delete(`http://127.0.0.1:4000/api/v1/comments/${commentClickedId}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => fetchComments());
  };

  return (
    <>
      {currentUser ? (
        <FormComment onSubmit={(e) => handleSubmit(e)}>
          <ImageUser src={UserDefault} alt="user default" />
          <TextareaComment
            type="text"
            cols="10"
            maxLength="350"
            placeholder="Your comment"
            name="comment"
            value={sendComment}
            onChange={(e) => setSendComment(e.target.value)}
            required
          ></TextareaComment>
          <ButtonComment type="submit" onClick={(e) => handleSubmit(e)}>
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
      <List>
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
                  <>
                    <CloseIcon onClick={(e) => handleRemoveBtn(e)}>
                      <ion-icon size="large" name="trash-outline"></ion-icon>
                    </CloseIcon>
                  </>
                )}
              </Content>
            </CommentContainer>
          );
        })}
      </List>
    </>
  );
};

export default Comments;
