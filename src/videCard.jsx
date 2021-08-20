import "./videoCard.css";

let VideoCard = () => {
  return (
    <div className="video-card">
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
