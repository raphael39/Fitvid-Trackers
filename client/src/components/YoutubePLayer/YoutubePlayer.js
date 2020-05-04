import React, { useRef } from 'react';
import ReactPlayer from 'react-player'

function YoutubePlayer ({url}) {

  const player = useRef();

  return (
    <div className="Youtube">
      <ReactPlayer ref={player} url={url} controls={true} />
      <button onClick={() => { player.current.seekTo(15, 'seconds')}}>test 15 seconds</button>
      <button onClick={() => { player.current.seekTo(59, true)}}>test 59 seconds</button>
    </div>
  ) 
}

export default YoutubePlayer;