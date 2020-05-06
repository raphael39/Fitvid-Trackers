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
  const [description, setDescription] = useState('');
  const [difficulties, setDifficulties] = useState({easy:false, medium:false, hard:false});
  const [days, setDays] = useState({monday:false, tuesday:false, wednesday:false, thursday:false, friday:false, saturday:false, sunday:false});

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

  const handleDifficulties = (level) => {
    difficulties[level] = !difficulties[level]
  }

  // const difficultyCheckedOrNot = (difficulty) => {
  //   if(difficulties[difficulty]) return "checked";
  // }

  const handleDays = (level) => {
    days[level] = !days[level]
  }

  return (
    <div>
      <TopBar />
      <div className='div-creating'>
        <h1>Create your day workout</h1>
        <label for='workout-name'>Name of the workout: </label>
        <input id='workout-name' type='text' onChange={(event)=> handlingWorkoutName(event)}/>
        <p>{day}</p>
        <p style={{fontStyle: "italic"}}>Test Url: https://www.youtube.com/watch?v=vc1E5CfRfos&t=563s (you can try others too)</p>
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
        <div>
          <p>Description:</p>
          <textarea rows="4" cols="50" onChange={(event)=>setDescription(event.target.value)}/>
          {/* <button onClick={()=>{console.log(description)}}>c.log description</button> */}
        </div>
        <div>
          <p>Difficulty: </p>
          <label><input type="checkbox" name="easy" onClick={()=>handleDifficulties("easy")}/>Easy</label>
          <label><input type="checkbox" name="medium" onClick={()=>handleDifficulties("medium")}/>Medium</label>
          <label><input type="checkbox" name="hard" onClick={()=>handleDifficulties("hard")}/>Hard</label>
          <br/>
        </div>
        <div>
          <p>Repeat every: </p>
          <label><input type="checkbox" name="monday" onClick={()=>handleDays("monday")} />Monday</label>
          <label><input type="checkbox" name="tuesday" onClick={()=>handleDays("tuesday")}/>Tuesday</label>
          <label><input type="checkbox" name="wednesday" onClick={()=>handleDays("wednesday")}/>Wednesday</label>
          <label><input type="checkbox" name="thursday" onClick={()=>handleDays("thursday")}/>Thursday</label>
          <label><input type="checkbox" name="friday" onClick={()=>handleDays("friday")}/>Friday</label>
          <label><input type="checkbox" name="saturday" onClick={()=>handleDays("saturday")}/>Saturday</label>
          <label><input type="checkbox" name="sunday" onClick={()=>handleDays("sunday")}/>Sunday</label>
          <br/>
        </div>
        <button onClick={() => { }}>Create</button>
      </div>
    </div>
  )
}

export default CreateWorkout;