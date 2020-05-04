import React, { useRef, useEffect } from 'react';
import ReactPlayer from 'react-player'

function YoutubePlayer ({url, timeVideo}) {

  const player = useRef();
  console.log(player.current)

  function convertToSeconds (time) {
    if(!time.includes(":")) return Number(time);
    if(time.split(":").length===2) {
      const seconds = Number(time.split(":")[1]);
      const minutes = Number(time.split(":")[0]);
      return (minutes*60+seconds)
    }
    if(time.split(":").length===3) {     
      const seconds = Number(time.split(":")[2]);
      const minutes = Number(time.split(":")[1]);
      const hours = Number(time.split(":")[0]);
      return (hours*3600+minutes*60+seconds)
    }
    return undefined;    
  }

  useEffect(()=>{
    if(timeVideo) {
      console.log(timeVideo)
      const timeToSec = convertToSeconds(timeVideo)
      player.current.seekTo(timeToSec, "seconds")
    }
  },[timeVideo])


  return (
    <div className="Youtube">
      <ReactPlayer ref={player} url={url} controls={true} playing/>
      <button onClick={() => { player.current.seekTo(15, 'seconds')}}>test 15 seconds</button>
      <button onClick={() => { player.current.seekTo(180, "seconds")}}>test 180 seconds</button>
      {player.current && console.log(player.current)}
    </div>
  ) 
}

export default YoutubePlayer;