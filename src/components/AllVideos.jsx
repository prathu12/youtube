import React from "react";
import vi1 from "../../src/Assest/img1";
import Video from "./youtube/Video";
import vi2 from "../../src/Assest/img2";
import vi3 from "../../src/Assest/img3";
import vi4 from "../../src/Assest/img6";
import vi5 from "../../src/Assest/img7";
// import vi1 from "../../src/Assest/img1";

function AllVideos() {
  const AllVideostyle = {
    display: "flex",
    flexWrap: "wrap",
    background : "black",
    color:"white"
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
          title="All New Tata Nexon
          2024 | Diesel"
          name="PRATHU'S GARAGE"
          views="1.3M"
          upload="1 day ago"
        />
        <Video 
        image={vi2}
        title="LAMORGHINI 2020 | Drag Race"
        name="PRATHU'S GARAGE"
        views="1.3M"
        upload="1 day ago"
        />
        <Video 
        image={vi3}
        title ="Mix - Mareez-E-Ishq | [ Slowed+Reverb ]
         | ZiD | Prathu Pote | LOFI WALA" 
        name="Lofi Master"
        views="10.3M"
        upload="19 days ago"
        />
        <Video 
        image={vi4}
        title ="Mix - Usse Mera Chahra Chhupa Bhi Naa | Haan Tu Hai |  (Slowed Reverb )Deep Vibes - Topic"
        name="Lofi Master"
        views="10.3M"
        upload="19 days ago"
        />
        <Video 
        image={vi5}
        title ="💛💚 Best Mashup NonStop Love Mashup of Arijit Singh, Jubin Nautiyal, BPraak, AtifAslam ,Neha Kakkar by Bollywood Nonstop 6,331,646 views 4 months ago 47 minutes💛💚 Best Mashup NonStop Love Mashup of Arijit Singh, Jubin Nautiyal, BPraak, AtifAslam"
        name="Lofi Master"
        views="10.3M"
        upload="19 days ago"
        />
    </div>
  );
}

export default AllVideos;
