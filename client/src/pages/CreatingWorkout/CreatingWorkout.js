import React from 'react';

//mock data 

//youtube url, please note that the user copied an url with time too, to consider as case scenario
const url = 'https://www.youtube.com/watch?v=vc1E5CfRfos&t=563s'
//day selected for the workout
const day = 'Wednesday'

function CreatingWorkout () {

  function getIdVideoYoutube (url) {
    var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
    var match = url.match(regExp);
    return (match&&match[7].length==11)? match[7] : false;
  }

  const urlForEmbeddedVideo = `https://www.youtube.com/embed/${getIdVideoYoutube(url)}`

  return (
    <div className = 'div-creating'>
      <h1>Create your day workout</h1>
      <h3>Video name</h3>
      <p>{day}</p>
      <iframe width="560" height="315" src={urlForEmbeddedVideo} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
    </div>
  ) 
}

export default CreatingWorkout;