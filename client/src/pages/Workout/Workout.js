import React, { useState, useEffect } from 'react';
import Table from '../../components/Table/Table';
import YoutubePlayer from '../../components/YoutubePLayer/YoutubePlayer'
import TopBar from '../../components/TopBar/TopBar';


//mock data
const workout = {id:"randomNumber", idYoutube:"vc1E5CfRfos", rows: [{ name: "Pull-ups", sets: "3", reps: "20", timestamp: "15", done: false }, { name: "Abs ", sets: "2", reps: "1min", timestamp: "3:00", done: false }, { name: "Squats ", sets: "3", reps: "5", timestamp: "4:00", done: false }]}

function Workout ({
  //url/id, rows
}) {
  
  const [rows, setRows] = useState()
  const [timeVideo, setTimeVideo] = useState();
  const [clickTimestamp, setClickTimestamp] = useState(false);
  const [editable, setEditable] = useState(false)

  useEffect(()=>{
    setRows(workout.rows);
  }, [])

  return (
    <div>
      <TopBar />
      <div className='div-Workout'>
        Workout
     <YoutubePlayer url={`https://www.youtube.com/watch?v=${workout.idYoutube}`} timeVideo={timeVideo} clickTimestamp={clickTimestamp} />
     <button onClick={()=>{setEditable(!editable)}}>{editable? "Done" : "Edit"}</button>
        {rows && <Table rows={rows} setRows={setRows} editable={editable} setTimeVideo={setTimeVideo} setClickTimestamp={setClickTimestamp} clickTimestamp={clickTimestamp} />}
      </div>
    </div>
  )
}

export default Workout;