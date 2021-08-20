import { useContext } from "react";
import { auth } from "./firebase";

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
    </>
  );
};

export default Home;
