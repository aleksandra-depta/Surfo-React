import { useAppSelector } from "../../hooks";
import { Tour } from "../../models/tour";
import {
  useDeleteCommentMutation,
  useGetCommentsQuery,
} from "../../services/toursApi";
import CommentsForm from "../commentsForm/commentsForm.component";

import { TextMedium } from "../../styled/typography";
import {
  CloseIcon,
  CommentContainer,
  Container,
  ContainerComment,
  Content,
  ImageUser,
  List,
  UserName,
} from "./comments.styles";
import IonIcon from "@reacticons/ionicons";

const Comments = ({ tour }: { tour: Tour }) => {
  const { currentUser } = useAppSelector((store) => store.auth);
  const { data: commentsOnTour, isSuccess } = useGetCommentsQuery(tour._id);
  const [deletePost] = useDeleteCommentMutation();

  return (
    <ContainerComment>
      <CommentsForm tour={tour} />
      <Container>
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
                        <IonIcon size="large" name="close-outline" />
                      </CloseIcon>
                    )}
                  </Content>
                </CommentContainer>
              );
            })}
          </List>
        )}
      </Container>
    </ContainerComment>
  );
};

export default Comments;
