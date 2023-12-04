import React from "react";
import vi1 from "../../src/Assest/img1";
import Video from "./youtube/Video";
import vi2 from "../../src/Assest/img2";
import vi3 from "../../src/Assest/img3";
// import vi1 from "../../src/Assest/img1";

function AllVideos() {
  const AllVideostyle = {
    display: "flex",
    flexWrap: "wrap",
  };
  // let myVideos = [
  //   {
  //     image: { vi1 },
  //     title: "LAMORGHINI 2020",
  //     name: "PRATHU'S GARAGE",
  //     views: "35M Viwes",
  //     upload: "1 week ago",
  //   },
  //   {
  //     image: { vi2 },
  //     title: "LAMORGHINI 2020",
  //     name: "PRATHU'S GARAGE",
  //     views: "35M Viwes",
  //     upload: "1 week ago",
  //   },
  //   {
  //     image: { vi3 },
  //     title: "LAMORGHINI 2020",
  //     name: "PRATHU'S GARAGE",
  //     views: "35M Viwes",
  //     upload: "1 week ago",
  //   },
  //   {
  //     image: { vi4 },
  //     title: "LAMORGHINI 2020",
  //     name: "PRATHU'S GARAGE",
  //     views: "35M Viwes",
  //     upload: "1 week ago",
  //   },
  // ];
  return (
    <div style={AllVideostyle}>
      {/* {myVideos.map((Video) => (
        ))} */}
        <Video
          image={vi1}
          title="LAMORGHINI 2020"
          name="PRATHU'S GARAGE"
          views="1.3M"
          upload="1 day ago"
        />
        <Video 
        image={vi2}
        title="LAMORGHINI 2020"
        name="PRATHU'S GARAGE"
        views="1.3M"
        upload="1 day ago"
        />
        <Video 
        image={vi3}
        title ="Mix - Mareez-E-Ishq | [ Slowed+Reverb ]
         | ZiD | Arijit Singh | LOFI WALA" 
        name="Lofi Master"
        views="10.3M"
        upload="19 days ago"
        />
    </div>
  );
}

export default AllVideos;
