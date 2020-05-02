import React, { useState } from 'react';

function ImportVideo () {

  const [url, setUrl] = useState(null);


  return (
    <div className = 'div-import'>
      <h1>Import Video</h1>
      <p>Copy here the youtube link you want to import:</p>
      <input type='text' placeholder='video url' onChange ={e=> setUrl(e.target.value)}></input>
      <button onClick={()=>{console.log(url)}}>Create</button>
    </div>
  ) 
}

export default ImportVideo;