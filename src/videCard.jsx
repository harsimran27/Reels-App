import { useState } from "react";
import "./videoCard.css";

let VideoCard = () => {
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
        src="https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4"
        className="video-card-video"
      ></video>
      {commentBoxOpen ? <div className="video-card-comment-box"></div> : ""};
      <div className="video-card-username">some-user</div>
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
