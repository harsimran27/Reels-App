import { useState, useContext, useEffect } from "react";
import { authContext } from "./AuthProvider";
import { firestore } from "./firebase";
import "./videoCard.css";

let VideoCard = (props) => {
  let [playing, setPlaying] = useState(true);
  let [commentBoxOpen, setCommentBoxOpen] = useState(false);
  let [currUserComment, setCurrUserComment] = useState("");
  let [comments, setComments] = useState([]);
  let user = useContext(authContext);

  let currUserLiked;
  if (user) {
    currUserLiked = props.data.likes.includes(user.uid);
  }

  useEffect(() => {
    let f = async () => {
      let commentsArr = props.data.comments;

      let arr = [];
      for (let i = 0; i < commentsArr.length; i++) {
        let commentDoc = await firestore
          .collection("comments")
          .doc(commentsArr[i])
          .get();

        arr.push(commentDoc.data());
      }

      setComments(arr);
    };
    f();
  }, [props]);

  return (
    <div className="video-card">
      <video
        loop
        onClick={(el) => {
          if (playing) {
            el.currentTarget.pause();
            setPlaying(false);
          } else {
            el.currentTarget.play();
            setPlaying(true);
          }
        }}
        src={props.data.url}
        className="video-card-video"
      ></video>
      {commentBoxOpen ? (
        <div className="video-card-comment-box">
          <div className="actual-comments">
            {comments.map((el) => {
              return (
                <div className="post-user-comment">
                  <img src={el.photo} alt="" />
                  <div>
                    <h5>{el.name}</h5>
                    <p>{el.comment}</p>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="comment-form">
            <input
              type="text"
              value={currUserComment}
              onChange={(e) => {
                setCurrUserComment(e.currentTarget.value);
              }}
            />
            <button
              className="material-icons-outlined"
              onClick={async () => {
                let docRef = await firestore.collection("comments").add({
                  name: user.displayName,
                  comment: currUserComment,
                  photo: user.photoURL,
                });

                setCurrUserComment("");

                let doc = await docRef.get();
                let commentId = doc.id;

                let postDoc = await firestore
                  .collection("posts")
                  .doc(props.data.id)
                  .get();

                let postCommentArr = postDoc.data().comments;

                postCommentArr.push(commentId);

                await firestore.collection("posts").doc(props.data.id).update({
                  comments: postCommentArr,
                });
              }}
            >
              send
            </button>
          </div>
        </div>
      ) : (
        ""
      )}
      ;<div className="video-card-username">some-user</div>
      <div className="video-card-music">
        <span className="material-icons-outlined">music_note</span>
        <marquee>some new song playing</marquee>
      </div>
      <span
        onClick={() => {
          if (commentBoxOpen) {
            setCommentBoxOpen(false);
          } else {
            setCommentBoxOpen(true);
          }
        }}
        className="material-icons-outlined video-card-comment"
      >
        chat
      </span>
      <span
        className="material-icons-outlined video-card-like"
        onClick={() => {
          let likesArr = props.data.likes;
          if (currUserLiked) {
            likesArr = likesArr.filter((el) => el != user.uid);
          } else {
            likesArr.push(user.uid);
          }
          firestore
            .collection("posts")
            .doc(props.data.id)
            .update({ likes: likesArr });
        }}
      >
        {currUserLiked ? "favorite" : "favorite_border"}
      </span>
    </div>
  );
};

export default VideoCard;
