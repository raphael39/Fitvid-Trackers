import React from 'react';

function DescriptionWorkout ({description, setDescription, editable}) {
  console.log("EDITABLE", editable)
  return (
  <div>
    {editable && 
    <div>
      <p>Description:</p>
      <textarea exercises="4" cols="50" onChange={(event)=>setDescription(event.target.value)} defaultValue={description}/>
    </div>}

  </div>  
  )
};

export default DescriptionWorkout