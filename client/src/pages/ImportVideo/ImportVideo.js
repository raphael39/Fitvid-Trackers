import React from 'react';

function ImportVideo () {

  return (
    <div className = 'div-login'>
      <h1>Import Video</h1>
      <p>Copy here the youtube link you want to import:</p>
      <input type='text' placeholder='video url'></input>
      <button>Create</button>
    </div>
  ) 
}

export default ImportVideo;