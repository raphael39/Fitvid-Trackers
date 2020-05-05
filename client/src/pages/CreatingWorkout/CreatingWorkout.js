import React, { useState, useEffect } from 'react';
import Table from '../../components/Table/Table';
import YoutubePlayer from '../../components/YoutubePLayer/YoutubePlayer'
import TopBar from '../../components/TopBar/TopBar';

//mock data

//youtube url, please note that the user copied an url with time too, to consider as case scenario
const testUrl = 'https://www.youtube.com/watch?v=vc1E5CfRfos&t=563s'
//day selected for the workout
const day = 'Wednesday';
//time of the video, to implement timestamps
let time = 0;


function getIdVideoYoutube (url) {
  var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
  var match = url.match(regExp);
  console.log((match && match[7].length == 11) ? match[7] : false)
  return (match && match[7].length == 11) ? match[7] : false;
}
//-------------------------------------------
function CreatingWorkout () {

  const [url, setUrl] = useState('');

  useEffect(() => {
    const youtubeId = getIdVideoYoutube(testUrl);
    setUrl(`https://www.youtube.com/watch?v=${youtubeId}`)
  }, [])

  console.log(url)
  // let urlForEmbeddedVideo = `https://www.youtube.com/embed/${youtubeId}${ time===0 ?  '' : '?start=32'}`

  return (
    <div>
      <TopBar />
      <div className='div-creating'>
        <h1>Create your day workout</h1>
        <h3>Video name</h3>
        <p>{day}</p>
        <YoutubePlayer url={url} />
        <Table editable={true} />
        <button onClick={() => { }}>Create</button>
      </div>
    </div>
  )
}

export default CreatingWorkout;