import React from 'react';

function DescriptionWorkout ({description, setDescription, editable}) {
  return (
  <div>
    {editable && 
    <div>
      <h4>Description:</h4>
      <textarea exercises="4" cols="50" onChange={(event)=>setDescription(event.target.value)} defaultValue={description}/>
    </div>}
    {!editable && 
    <div>
      <h4>Description:</h4>
      <p>{description}</p>
    </div>}

  </div>  
  )
};

export default DescriptionWorkout