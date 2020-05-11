import React, { useState } from 'react';
import NameWorkout from '../../components/NameWorkout/NameWorkout';
import Table from '../../components/Table/Table';
import DescriptionWorkout from '../../components/DescriptionWorkout/DescriptionWorkout';
import DifficultyWorkout from '../../components/DifficultyWorkout/DifficultyWorkout';
import DaysWorkout from '../../components/DaysWorkout/DaysWorkout';
import YoutubePlayer from '../../components/YoutubePLayer/YoutubePlayer'
import PublicWorkout from '../../components/PublicWorkout/PublicWorkout';
import ApiClient from '../../Services/ApiClient';
import NavBar from './../../components/Navigation/navBar'
import moment from 'moment';
import nextDay from 'next-day';

// redux
import { useSelector, useDispatch } from "react-redux";
import { setSchedule } from '../../redux/actions/scheduleActions';

//route
import { Link } from 'react-router-dom';

function getIdVideoYoutube (url) {
  var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
  var match = url.match(regExp);
  return (match && match[7].length == 11) ? match[7] : false;
}
//-------------------------------------------

function CreateWorkout () {

  //redux
  const dispatch = useDispatch();
  const user = useSelector(state => state.currentUser);
  const schedule = useSelector(state => state.schedule);

  const [youtubeUrl, setYoutubeUrl] = useState('');
  const [workoutName, setWorkoutName] = useState();
  const [youtubeId, setYoutubeId] = useState();
  const [exercises, setExercises] = useState([{ name: "", sets: 0, reps: 0, timestamp: "" }]);
  const [description, setDescription] = useState('');
  const [difficulties, setDifficulties] = useState({ easy: false, medium: false, hard: false });
  const [days, setDays] = useState([false, false, false, false, false, false, false]);
  const [repeatWeeks, setRepeatWeeks] = useState(1);
  const [isPublic, setIsPublic] = useState(false);

  const handlingYoutubeUrl = (event) => {
    event.preventDefault();
    setYoutubeUrl(event.target.value);
  }

  const generateYoutubeId = () => {
    const youtubeId = getIdVideoYoutube(youtubeUrl);
    setYoutubeId(youtubeId);
  }

  const getSchedule = (workoutId) => {
    const arr = [];

    for (let i = 0; i < repeatWeeks; i++) {
      for (let j = 0; j < 7; j++) {
        if (days[j]) {
          const day = nextDay(new Date(), j+1).date;
          arr.push({day: moment(day).add(7*i, 'days').format('YYYY-MM-DD'), workout: workoutId});
        }
      }
    }

    return arr;
  }

  async function createWorkout () {
    const workout = {
      name: workoutName,
      description: description,
      difficulties: difficulties,
      type: "strenght",
      youtubeId: youtubeId,
      tags: ["workInProgress"],
      length: 0,
      createdBy: user._id,
      exercises: exercises,
      isPublic: isPublic
    };

    ApiClient.createWorkout(workout)
    .then((response) => {
      const workoutId = response;
      const scheduleArr = getSchedule(workoutId);
      const newMap = [...schedule.map, ...scheduleArr]
      const newSchedule = { userId: schedule.userId, map: newMap };
      ApiClient.updateSchedule(newSchedule).then((response) => {
        dispatch(setSchedule(response));
      });
    });

    return null;
  }

  return (
    <div>
      <NavBar />
      <div className='div-creating'>
        <h1>Create your day workout</h1>
        <NameWorkout workoutName={workoutName} setWorkoutName={setWorkoutName} editable={true} />
        <p style={{ fontStyle: "italic" }}>Test Url: https://www.youtube.com/watch?v=vc1E5CfRfos&t=563s (you can try others too)</p>
        {!youtubeId &&
          <div>
            <label for='youtubeUrl'>Import your Youtube video here: </label>
            <input id='youtubeUrl' type='text' onChange={(event) => handlingYoutubeUrl(event)} />
            <button onClick={generateYoutubeId}>Import</button>
          </div>}
        {youtubeId &&
          <div>
            <YoutubePlayer url={`https://www.youtube.com/watch?v=${youtubeId}`} />
            <button onClick={() => setYoutubeId()}>Change Video</button>
          </div>
        }
        <Table exercises={exercises} setExercises={setExercises} editable={true} />
        <DescriptionWorkout description={description} setDescription={setDescription} editable={true} />
        <DifficultyWorkout difficulties={difficulties} setDifficulties={setDifficulties} editable={true} />
        <br />
        <DaysWorkout days={days} setDays={setDays} repeatWeeks={repeatWeeks} setRepeatWeeks={setRepeatWeeks} editable={true} />
        <br />
        <PublicWorkout isPublic={isPublic} setIsPublic={setIsPublic} editable={true} />
        <br />
        <button onClick={() => console.log(user)}>User?</button>
        <button onClick={createWorkout}><Link to={`/HomePage`} >Create</Link></button>
      </div>
    </div>
  )
}

export default CreateWorkout;