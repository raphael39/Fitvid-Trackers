import React, { useState } from 'react';
import NameWorkout from '../../components/NameWorkout/NameWorkout';
import Table from '../../components/Table/Table';
import DescriptionWorkout from '../../components/DescriptionWorkout/DescriptionWorkout';
import DifficultyWorkout from '../../components/DifficultyWorkout/DifficultyWorkout';
import DaysWorkout from '../../components/DaysWorkout/DaysWorkout';
import YoutubePlayer from '../../components/YoutubePLayer/YoutubePlayer'
import TopBar from '../../components/TopBar/TopBar';
import PublicWorkout from '../../components/PublicWorkout/PublicWorkout';


// redux
import { useSelector } from "react-redux";

//route
import { Link } from 'react-router-dom';




//mock data
const day = 'Friday';

function getIdVideoYoutube (url) {
  var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
  var match = url.match(regExp);
  return (match && match[7].length == 11) ? match[7] : false;
}
//-------------------------------------------

function CreateWorkout () {

  //redux
  const user = useSelector(state => state.currentUser);

  const [youtubeUrl, setYoutubeUrl] = useState('');
  const [workoutName, setWorkoutName] = useState();
  const [idYoutube, setIdYoutube] = useState();
  const [exercises, setExercises] = useState([{name: "", sets: "", reps: "", timestamp: "",done: false}]);
  const [description, setDescription] = useState('');
  const [difficulties, setDifficulties] = useState({easy:false, medium:false, hard:false});
  const [days, setDays] = useState({monday:false, tuesday:false, wednesday:false, thursday:false, friday:false, saturday:false, sunday:false});
  const [publicWorkout, setPublicWorkout] = useState(false);

  const handlingYoutubeUrl = (event) => {
    event.preventDefault();
    setYoutubeUrl(event.target.value);
  }

  const generateYoutubeId = () => {
    const youtubeId = getIdVideoYoutube(youtubeUrl);
    setIdYoutube(youtubeId);
  }

  const createMockWorkout = () => {
    let workout = {
      id: "random Number",
      workoutName,
      idYoutube,
      exercises,
      description,
      difficulties,
      days
    }
    console.log( workout);
  }

  return (
    <div>
      <TopBar />
      <div className='div-creating'>
        <h1>Create your day workout</h1>
        <NameWorkout workoutName={workoutName} setWorkoutName={setWorkoutName} editable={true}/>
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
        <Table exercises={exercises} setExercises={setExercises} editable={true} />
        <DescriptionWorkout description={description} setDescription={setDescription} editable={true}/>
        <DifficultyWorkout difficulties={difficulties} setDifficulties={setDifficulties} editable={true}/>
        <br/>
        <DaysWorkout days={days} setDays={setDays} editable={true}/>
        <br/>
        <PublicWorkout publicWorkout={publicWorkout} setPublicWorkout={setPublicWorkout} editable={true}/>
        <br/>

        <button onClick={()=>console.log(user)}>User?</button>
        
        <button onClick={createMockWorkout}><Link to={`/HomePage`} >Create</Link></button>

      </div>
    </div>
  )
}

export default CreateWorkout;