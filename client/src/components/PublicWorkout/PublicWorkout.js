import React from 'react';

function PublicWorkout ({publicWorkout, setPublicWorkout, editable}) {
  
  const handlePublic = () => {
    setPublicWorkout(!publicWorkout)
  }

  return (
    <div>
      {editable && 
        <div>
          <h4>Do you want to make your workout available to other users: </h4>
          <input type="checkbox" name="public" defaultChecked={publicWorkout} onClick={handlePublic}/>
        </div>
      }
      {!editable && 
        <div>
          {publicWorkout && <p>This workout is currently available for other users.</p>}
          {!publicWorkout && <p>This workout is currently private.</p>}
        </div>}
    </div>
  )
};

export default PublicWorkout