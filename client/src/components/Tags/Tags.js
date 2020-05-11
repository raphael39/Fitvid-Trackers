import React from 'react';
import ChipInput from 'material-ui-chip-input';


function Tags ({tags, setTags, editable}) {
  console.log("EDITABLE", editable)
  return (
  <div>
    <h4>Tags:</h4>
    <ChipInput defaultValue={tags} onChange={setTags} readOnly={!editable} />
  </div>
  )
};

export default Tags