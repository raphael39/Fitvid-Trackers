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
function CreateWorkout () {

  const [youtubeUrl, setYoutubeUrl] = useState('');
  const [workoutName, setWorkoutName] = useState();
  const [idYoutube, setIdYoutube] = useState();

  // useEffect(() => {
  //   const youtubeId = getIdVideoYoutube(testUrl);
  //   setUrl(`https://www.youtube.com/watch?v=${youtubeId}`)
  // }, [])

  const handlingWorkoutName = (event) => {
    event.preventDefault();
    setWorkoutName(event.target.value);
  }

  const handlingYoutubeUrl = (event) => {
    event.preventDefault();
    setYoutubeUrl(event.target.value);
  }

  const generateYoutubeId = () => {
    const youtubeId = getIdVideoYoutube(youtubeUrl);
    setIdYoutube(youtubeId);
  }


  return (
    <div>
      <TopBar />
      <div className='div-creating'>
        <h1>Create your day workout</h1>
        <label for='workout-name'>Name of the workout: </label>
        <input id='workout-name' type='text' onChange={(event)=> handlingWorkoutName(event)}/>
        <p>{day}</p>
        <p>Test Url: https://www.youtube.com/watch?v=vc1E5CfRfos&t=563s (you can try others too)</p>
        {!idYoutube && 
          <div>
            <label for='youtubeUrl'>Import your Youtube video here: </label>
            <input id='youtubeUrl' type='text' onChange={(event)=> handlingYoutubeUrl(event)}/>
            <button onClick={generateYoutubeId}>Import</button>
          </div>}
        {idYoutube && 
          <div>
            <YoutubePlayer url={`https://www.youtube.com/watch?v=${idYoutube}`} />
            <button onClick={() => setIdYoutube()}>Change Video</button>
          </div>
        }
        <Table editable={true} />
        <button onClick={() => { }}>Create</button>
      </div>
    </div>
  )
}

export default CreateWorkout;