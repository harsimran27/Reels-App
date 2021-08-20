import { useState } from "react";
import "./videoCard.css";

let VideoCard = () => {
  let [playing, setPlaying] = useState(true);

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
      <div className="video-card-username">some-user</div>
      <div className="video-card-music">
        <span class="material-icons-outlined">music_note</span>
        <marquee>some new song playing</marquee>
      </div>

      <span class="material-icons-outlined video-card-comment">chat</span>
      <span class="material-icons-outlined video-card-like">
        favorite_border
      </span>
    </div>
  );
};

export default VideoCard;
