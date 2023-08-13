import React from "react";
import Card from "./card";

function Home(){
    return (
        <>
        <h1 className="center">Entertainment Platform</h1>
<div className="hole_page">
         <Card
          img ="https://www.screennearyou.com/wp-content/uploads/2023/06/watch-hijack-on-apple-tv-plus-online.webp" 
          title = "Hijack"
          link = "https://www.justwatch.com/us/tv-show/hijack"
          />

         <Card
          img ="https://technext24.com/wp-content/uploads/2023/05/Super-Mario-Bros-.jpeg" 
          title = "The Super Mario Bros Film"
          link = "https://www.justwatch.com/us/movie/super-mario-bros-the-movie"
          />

         <Card
          img ="https://assets-in.bmscdn.com/discovery-catalog/events/et00347275-ljcvetfzuq-landscape.jpg" 
          title = "Spider-Man: Across the Spider-Verse"
          link = "https://www.justwatch.com/us/movie/spider-man-into-the-spider-verse-2"
          />
          </div>
        </>
    )
}

export default Home ;
