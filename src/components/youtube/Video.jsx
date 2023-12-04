import React from "react";
import "../Styles/Video.css";

const Video = (props) => {
  return (
    <div className="video-container">
      <div className="thumbnail">
        <img
          src={props.image}
          alt=""
          style={{ height: "100%", width: "100%" }}
        />
      </div>
      <div className="video-info">
        <div className="channel-img"></div>
      </div>
      <div className="channel-info">
        <h3 className="video-title ">{props.title}</h3>
      </div>
      <p className="channel-name">{props.name}</p>
      <span className="views">1M</span>.
      <span className="upload">10 days ago</span>
    </div>
  );
};

export default Video;
