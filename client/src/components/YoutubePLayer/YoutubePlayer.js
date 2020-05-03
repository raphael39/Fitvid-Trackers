import React, { useRef } from 'react';
import ReactPlayer from 'react-player'

function YoutubePlayer () {

  const player = useRef();

  return (
    <div className="Youtube">
      <ReactPlayer ref={player} url='https://www.youtube.com/watch?v=ysz5S6PUM-U' controls={true} playing />
      <button onClick={() => { player.current.seekTo(15, 'seconds')}}>test</button>
      <button onClick={() => { player.current.seekTo(59, true)}}>test</button>
    </div>
  ) 
}

export default YoutubePlayer;