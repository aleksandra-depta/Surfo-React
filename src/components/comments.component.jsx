import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../contexts/user.context";

import axios from "axios";
import Cookies from "universal-cookie";

import UserDefault from "../img/user.png";

const cookies = new Cookies();

const Comments = ({ tour }) => {

  const [comments, setComments] = useState([]);
  const [sendComment, setSendComment] = useState([]);
  const { currentUser } = useContext(UserContext);

  const fetchComments = () => {
    fetch(`http://127.0.0.1:4000/api/v1/tours/${tour._id}/comments`)
    .then((response) => response.json())
    .then((comment) => setComments(comment.data.comments))
  }

  useEffect(() => {
    fetchComments()
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = cookies.get('jwt');

    await axios.post(`http://127.0.0.1:4000/api/v1/comments`, 
    {
      comment : `${sendComment}`,
      user : `${currentUser._id}`, 
      tour : `${tour._id}`,
    }, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    }).then( () => {
      setSendComment('');
      fetchComments()
    })
  }

  const handleRemoveBtn = async (e) => {
    const commentClickedId = e.target.id; 
    const token = cookies.get('jwt');

    await axios.delete(`http://127.0.0.1:4000/api/v1/comments/${commentClickedId}`, 
    {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    }).then((res) => fetchComments());
  }

  return (
    <div className="comments">
      <div className="commentsAdd">
        { currentUser ? (
          <div className="comments__box">     
            <form  onSubmit={(e)=>handleSubmit(e)} className="comments__form">              
              <img src={UserDefault} className="nav__userPhoto" alt='user default'/> 
              <div className="comments__inputs">
                <textarea 
                  type="text" 
                  cols="10" 
                  maxLength="350" 
                  className="comments__input comments__input--comment" 
                  placeholder="Your comment" 
                  name='comment' 
                  value={sendComment} 
                  onChange={(e) => setSendComment(e.target.value)}
                  required
                ></textarea>
              </div>
              <button 
                type="submit"
                className="comments__post btn btn__main"
                onClick={(e) => handleSubmit(e)} 
              >
                Post it!
              </button>
            </form>
          </div>
        ) : (
          <div> 
            <div className="text__description text__description--dark comments__info">
              Log in or Sign up if you want to send us review or add comment! 
              <Link 
                to="/login" 
                onClick={() => {window.scrollTo({top: 0, left: 0});}}
                className="title__second title__second--dark"
              > 
                Click here 
              </Link>
            </div>
          </div>
        )}
      </div>
      <ul className="comments__container">
        { comments.map(comment => {
          return (
            <div className="user" key={comment.user.name}>
              <div className="user__img">
                <img src={require(`../img/u/${comment.user.photo}`)} className="user__user" alt="user"/>
              </div>
              <div className="user__box">
                <div className="user__text user__text--name text__description text__description--dark">{comment.user.name.split(' ')[0]}</div>
                <div className="user__text  user__text--comment text__description text__description--dark">{comment.comment}</div>
                {currentUser ? (
                  comment.user._id === currentUser._id ? (
                    <div className="user__icons">  
                      <button onClick={(e) => handleRemoveBtn(e)} className="btn">
                        <ion-icon className="like text__small icon__heart" id={`${comment._id}`} name="close"></ion-icon>
                      </button>
                    </div>
                  ) : ('')
                ) : ('')}
              </div>
            </div>
          )
        })}
      </ul>
    </div>
  )
}

export default Comments;