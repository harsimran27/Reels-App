import { useContext } from "react";
import { auth, storage } from "./firebase";

import { authContext } from "./AuthProvider";
import { Redirect } from "react-router-dom";
import VideoCard from "./videCard";
import "./home.css";

let Home = () => {
  let user = useContext(authContext);
  return (
    <>
      {user ? "" : <Redirect to="/login" />}

      <div className="video-container">
        <VideoCard />
      </div>

      <button
        onClick={() => {
          auth.signOut();
        }}
        className="material-icons-outlined home-logout-btn "
      >
        logout
      </button>

      <input
        type="file"
        className="upload-file-btn"
        onClick={(e) => {
          e.currentTarget.value = null;
        }}
        onChange={(e) => {
          let videoObj = e.currentTarget.files[0];
          let { name, size, type } = videoObj;

          size = size / 1000000;

          if (size > 10) {
            alert("upload video less than 10 mb");
            return;
          }

          type = type.split("/")[0];

          if (type !== "video") {
            alert("please upload a video file");
            return;
          }

          let uploadTask = storage
            .ref(`posts/${user.uid}/${Date.now() + "-" + name}`)
            .put(videoObj);

          uploadTask.on("state-changed", null, null, () => {
            uploadTask.snapshot.ref.getDownloadURL().then((url) => {
              console.log(url);
            });
          });
        }}
      />
    </>
  );
};

export default Home;
