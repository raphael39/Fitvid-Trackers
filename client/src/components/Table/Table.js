import React, { useState, useEffect } from "react";

function Table ({exercises, setExercises, editable, setTimeVideo, setClickTimestamp, clickTimestamp}) {
  
  // const [exercises, setExercises] = useState([{name: "", sets: "", reps: "", timestamp: "",done: false}]);
console.log("inside table",exercises)

  //TO MODIFY
  const handleChange = (event, index, name) => {
    event.preventDefault();
    console.log(event.target.value, index, name);
    exercises[index][name] = event.target.value;
  }

  const handleAddExercise = () => {
    const item = {
      name: "",
      sets: "",
      reps: "",
      timestamp: "",
      done: false
    }
    setExercises([...exercises, item])
  }
  
  const handleRemoveExercise = () => {
    setExercises(exercises.slice(0, -1));
  }

  // const handleRemoveSpecificRow = (index) => {
  //   // const newRows = exercises
  //   // console.log(newRows)
  //   // const newRows = exercises.splice(index, 1);
  //   const newRows = exercises.filter(row => row !== exercises[index]);
  
  //   console.log("new Rows", newRows)
  //   // console.log(newRows)
  //   setExercises(newRows);
  // }

  const handleCheckbox = (index) => {
    exercises[index].done = !(exercises[index].done)
  }

  const logExercises= () => console.log(exercises)

 
  

  return (
    <div>
      <div className="container">
        <div className="row clearfix">
          <div className="col-md-12 column">
            <table
              className="table table-bordered table-hover"
              id="tab_logic"
            >
              <thead>
                <tr>
                  <th className="text-center"> Name of the exercises </th>
                  <th className="text-center"> Sets </th>
                  <th className="text-center"> Reps </th>
                  <th className="text-center"> Timestamp </th>
                  <th className="text-center"> Check </th>
                  <th />
                </tr>
              </thead>
              <tbody>
                {editable && exercises.map((item, idx) => (
                  <tr id="addr0" key={idx}>
                    <td>
                      <input
                          type="text"
                          name="name"
                          defaultValue={exercises[idx].name}
                          onChange={(event) => {handleChange(event, idx, "name")}}
                          className="form-control"
                        />
                    </td>
                    <td>
                      <input
                        type="text"
                        name="sets"
                        defaultValue={exercises[idx].sets}                        
                        onChange={(event) => handleChange(event, idx, "sets")}
                        className="form-control"
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        name="reps"
                        defaultValue={exercises[idx].reps}
                        onChange={(event) => handleChange(event, idx, "reps")}
                        className="form-control"
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        name="timestamp"
                        defaultValue={exercises[idx].timestamp}
                        onChange={(event) => handleChange(event, idx, "timestamp")}
                        className="form-control"
                      />
                    </td>
                    <td>
                      <input
                        type="checkbox"
                        name="done"
                        defaultValue={exercises[idx].done}

                        onClick={() => handleCheckbox(idx)}
                        className="form-control"
                      />
                    </td>
                    {/* <td>
                      <button
                        className="btn btn-outline-danger btn-sm"
                        onClick={() => handleRemoveSpecificRow(idx)}
                      >
                        Remove
                      </button>
                    </td> */}
                  </tr>
                ))}
                {!editable && exercises.map((item, idx) => (
                  <tr id="addr0" key={idx}>
                    <td>
                      {exercises[idx].name}
                    </td>
                    <td>
                      {exercises[idx].sets}

                    </td>
                    <td>
                      {exercises[idx].reps}
                    </td>
                    <td onClick={()=>{setTimeVideo(exercises[idx].timestamp); setClickTimestamp(!clickTimestamp)}}>
                      {exercises[idx].timestamp}
                    </td>
                    <td>
                      <input
                        type="checkbox"
                        name="done"
                        onClick={() => handleCheckbox(idx)}
                        className="form-control"
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            {editable && <div>
            <button onClick={handleAddExercise} className="btn btn-primary">
              Add Row
            </button>
            <button
              onClick={handleRemoveExercise}
              className="btn btn-danger float-right"
            >
              Delete Last Row
            </button>
            </div>}
            <button
              onClick={logExercises}
              className="btn btn-danger float-right"
            >
              Log Row
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}


export default Table; 