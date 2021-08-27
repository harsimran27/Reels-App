import { useState } from "react";
import "./videoCard.css";

let VideoCard = (props) => {
  let [playing, setPlaying] = useState(true);
  let [commentBoxOpen, setCommentBoxOpen] = useState(false);
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
            <div className="post-user-comment">
              <img
                src="https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80"
                alt=""
              />
              <div>
                <h5>user name</h5>
                <p>This is actual comment</p>
              </div>
            </div>
            <div className="post-user-comment">
              <img
                src="https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80"
                alt=""
              />
              <div>
                <h5>user name</h5>
                <p>This is actual comment</p>
              </div>
            </div>
          </div>
          <div className="comment-form">
            <input type="text" />
            <button className="material-icons-outlined">send</button>
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
      <span className="material-icons-outlined video-card-like">
        favorite_border
      </span>
    </div>
  );
};

export default VideoCard;
