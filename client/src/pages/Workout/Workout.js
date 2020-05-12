import React, { useState, useEffect } from 'react';
import NameWorkout from '../../components/NameWorkout/NameWorkout';
import Table from '../../components/Table/Table';
import YoutubePlayer from '../../components/YoutubePLayer/YoutubePlayer'
import DescriptionWorkout from '../../components/DescriptionWorkout/DescriptionWorkout';
import DifficultyWorkout from '../../components/DifficultyWorkout/DifficultyWorkout';
import DaysWorkout from '../../components/DaysWorkout/DaysWorkout';
import PublicWorkout from '../../components/PublicWorkout/PublicWorkout';
import Countdown from '../../components/Countdown/Countdown';
import Stopwatch from '../../components/Stopwatch/Stopwatch';
import Navigation from './../../components/Navigation/navBar';
import { Redirect } from 'react-router-dom';
import { useSelector } from "react-redux";
import Tags from '../../components/Tags/Tags';
import WorkoutLength from '../../components/WorkoutLength/WorkoutLength';
import ApiClient from '../../Services/ApiClient';


function Workout (props) {

  const [exercises, setExercise] = useState(null);
  const [_id, setId] = useState(null);
  const [workoutName, setWorkoutName] = useState();
  const [description, setDescription] = useState('');
  const [difficulties, setDifficulties] = useState({easy:false, medium:false, hard:false});
  const [days, setDays] = useState({monday:false, tuesday:false, wednesday:false, thursday:false, friday:false, saturday:false, sunday:false});
  const [isPublic, setIsPublic] = useState(false);
  const [tags, setTags] = useState([]);

  //videoplayer states, work on table if status editable=false
  const [timeVideo, setTimeVideo] = useState();
  const [clickTimestamp, setClickTimestamp] = useState(false);
  const [editable, setEditable] = useState(false);
  const [workoutLength, setworkoutLength] = useState(0);
  const [youtubeId, setYoutubeId] = useState();


  const user = useSelector(state => state.currentUser);

  useEffect(()=>{
    ApiClient.getWorkout(props.match.params.id)
      .then((workout) => {
        setId(workout._id);
        setExercise(workout.exercises);
        setDescription(workout.description);
        setDifficulties(workout.difficulties);
        setWorkoutName(workout.name);
        setIsPublic(workout.isPublic);
        setTags(workout.tags);
        setYoutubeId(workout.youtubeId);
        setworkoutLength(workout.length);
      })
  }, [])

  function switchEditable () {
    if (editable) {
      const updatedWorkout = {
        _id: _id,
        name: workoutName,
        description: description,
        difficulties: difficulties,
        type: "strenght",
        youtubeId: youtubeId,
        tags: tags,
        length: workoutLength,
        createdBy: user._id,
        exercises: exercises,
        isPublic: isPublic
      };
      ApiClient.updateWorkout(updatedWorkout)
        .then(() => { setEditable(!editable) })
        .catch((err) => { console.log('Error updating workout:', err); });
    } else {
      setEditable(!editable);
    }
  }

  return (

    (!user) ? <Redirect to="/" /> :

    <div>
      <Navigation/>
      <br/>
      <button onClick={switchEditable}>{editable? "Done" : "Edit"}</button>
      <div className='div-Workout'>
        <NameWorkout workoutName={workoutName} setWorkoutName={setWorkoutName} editable={editable}/>
        <YoutubePlayer url={`https://www.youtube.com/watch?v=${youtubeId}`} timeVideo={timeVideo} clickTimestamp={clickTimestamp} />
        {!editable &&
          <div>
            <Countdown/>
            <Stopwatch/>
          </div>}
        {exercises && <Table exercises={exercises} setExercise={setExercise} editable={editable} setTimeVideo={setTimeVideo} setClickTimestamp={setClickTimestamp} clickTimestamp={clickTimestamp} />}
        <DescriptionWorkout description={description} setDescription={setDescription} editable={editable}/>
        <WorkoutLength length={workoutLength} setLength={setworkoutLength} editable={editable} />
        <DifficultyWorkout difficulties={difficulties} setDifficulties={setDifficulties} editable={editable}/>
        <DaysWorkout days={days} setDays={setDays} editable={editable}/>
        <Tags tags={tags} setTags={setTags} editable={editable} />
        <PublicWorkout isPublic={isPublic} setIsPublic={setIsPublic} editable={editable}/>
      </div>
    </div>
  )
}

export default Workout;