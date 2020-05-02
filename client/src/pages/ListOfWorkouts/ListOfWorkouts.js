import React from 'react';
import WorkoutList from '../../components/WorkoutList/WorkoutList';
import './ListofWorkouts.css';

function ListOfWorkouts() {

    const fakeWorkouts = [
        {title: 'Chest Workout', description: '10 minutes intense bodyweight chest workout', difficulty: 'medium', type: 'strength', youtubeURL: 'https://youtu.be/BkS1-El_WlE'},
        {title: 'Full Body Workout', description: '30 minutes intense bodyweight workout', difficulty: 'hard', type: 'strength', youtubeURL: 'https://youtu.be/BkS1-El_WlE'},
        {title: 'Leg Workout', description: '10 minutes intense bodyweight chest workout', difficulty: 'medium', type: 'strength', youtubeURL: 'https://youtu.be/BkS1-El_WlE'},
        {title: 'Abs Workout', description: '10 minutes intense bodyweight chest workout', difficulty: 'medium', type: 'strength', youtubeURL: 'https://youtu.be/BkS1-El_WlE'},
        {title: 'core Workout', description: '10 minutes intense bodyweight chest workout', difficulty: 'medium', type: 'strength', youtubeURL: 'https://youtu.be/BkS1-El_WlE'}
    ]

  return (
      <div>
    <div className="header-search-view">
      <h1>Your Workouts</h1>
      <div className="search-workouts">
        <input
          type="text"
          className="search-input"
          onkeyup="myFunction()"
          placeholder="Search .."
          title="Type in a name"
        ></input>
      </div>
      
    </div>
    <WorkoutList workouts={fakeWorkouts}></WorkoutList>
    </div>
  );
}

export default ListOfWorkouts;
