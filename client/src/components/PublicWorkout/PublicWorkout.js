import React from 'react';

function PublicWorkout ({isPublic, setIsPublic, editable}) {
  
  const handlePublic = () => {
    setIsPublic(!isPublic)
  }

  return (
    <div>
      {editable && 
        <div>
          <h4>Do you want to make your workout available to other users: </h4>
          <input type="checkbox" name="public" defaultChecked={isPublic} onClick={handlePublic}/>
        </div>
      }
      {!editable && 
        <div>
          {isPublic && <p>This workout is currently available for other users.</p>}
          {!isPublic && <p>This workout is currently private.</p>}
        </div>}
    </div>
  )
};

export default PublicWorkout