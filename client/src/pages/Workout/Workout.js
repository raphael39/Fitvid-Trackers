import React, {useState} from 'react';
import Table from '../../components/Table/Table';
import YoutubePlayer from '../../components/YoutubePLayer/YoutubePlayer'
 


const rows = [{name: "Pull-ups", sets: "3", reps: "20", timestamp: "15", done: false}, {name: "Abs ", sets: "2", reps: "1min", timestamp: "3:00", done: false}, {name: "Squats ", sets: "3", reps: "5", timestamp: "4:00", done: false}]
const url = 'https://www.youtube.com/watch?v=vc1E5CfRfos';

function Workout ({
  //url/id, rows
}) {

  const [timeVideo, setTimeVideo] = useState();
  const [clickTimestamp, setClickTimestamp] = useState(false)


  return (
    <div className = 'div-Workout'>
     Workout
     <YoutubePlayer url={url} timeVideo={timeVideo} clickTimestamp={clickTimestamp}/>
     <Table rowsCompiled={rows} editable={false} setTimeVideo={setTimeVideo} setClickTimestamp={setClickTimestamp} clickTimestamp={clickTimestamp}/>
    </div>
  ) 
}

export default Workout;