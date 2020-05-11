import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import AddIcon from '@material-ui/icons/Add';
import Button from '@material-ui/core/Button';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import TextField from "@material-ui/core/TextField";


const useStyles = makeStyles((theme) => ({
  button: {
    backgroundColor: "black",
    color: "white", 
    '&:hover': {
        backgroundColor: 'rgb(80,80,80)',
    }
  },
}));

function Table ({exercises, setExercises, editable, setTimeVideo, setClickTimestamp, clickTimestamp}) {
  
  // const [exercises, setExercises] = useState([{name: "", sets: "", reps: "", timestamp: "",done: false}]);

  //TO MODIFY
  const handleChange = (event, index, name) => {
    event.preventDefault();
    console.log(event.target.value, index, name);
    exercises[index][name] = event.target.value;
  }

  const handleAddExercise = () => {
    const item = {
      name: "",
      sets: 0,
      reps: 0,
      timestamp: "",
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

  // const handleCheckbox = (index) => {
  //   exercises[index].done = !(exercises[index].done)
  // }

  // const logExercises= () => console.log(exercises)
  
  const classes = useStyles();

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
                  {!editable && <th className="text-center"> Check </th>}
                  <th />
                </tr>
              </thead>
              <tbody>
                {editable && exercises.map((item, idx) => (
                  <tr id="addr0" key={idx}>
                    <td>
                      <TextField
                        name="name"
                        size="small"
                        defaultValue={exercises[idx].name}
                        onChange={(event) => {handleChange(event, idx, "name")}}
                        variant="outlined"
                        />
                    </td>
                    <td>
                      <TextField
                        inputProps={{style: { textAlign: 'right' }}}
                        type="number"
                        name="sets"
                        size="small"
                        defaultValue={exercises[idx].sets}                        
                        onChange={(event) => handleChange(event, idx, "sets")}
                        variant="outlined"
                      />
                    </td>
                    <td>
                      <TextField
                        inputProps={{style: { textAlign: 'right' }}}
                        type="number"
                        name="reps"
                        size="small"
                        defaultValue={exercises[idx].reps}
                        onChange={(event) => handleChange(event, idx, "reps")}
                        variant="outlined"
                      />
                    </td>
                    <td>
                      <TextField
                        inputProps={{style: { textAlign: 'right' }}}
                        type="text"
                        name="timestamp"
                        size="small"
                        defaultValue={exercises[idx].timestamp}
                        onChange={(event) => handleChange(event, idx, "timestamp")}
                        variant="outlined"
                      />
                    </td>
                    {/* <td>
                      <input
                        type="checkbox"
                        name="done"
                        defaultValue={exercises[idx].done}
                        defaultChecked={exercises[idx].done}
                        onClick={() => handleCheckbox(idx)}
                        className="form-control"
                      />
                    </td> */}
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
                        // defaultChecked={exercises[idx].done}
                        // onClick={() => handleCheckbox(idx)}
                        className="form-control"
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            {editable && <div>
              <Button
              variant="contained"
              color="primary"
              className={classes.button}
              startIcon={<AddIcon/>} 
              size="small"
              onClick={handleAddExercise}
              >Add Row</Button>
            <Button
              variant="contained"
              color="primary"
              className={classes.button}
              startIcon={<HighlightOffIcon/>} 
              size="small"
              onClick={handleRemoveExercise}
              >Delete 
              Last Row</Button>
            </div>}
            {/* <button
              onClick={logExercises}
              className="btn btn-danger float-right"
            >
              Log Row
            </button> */}
          </div>
        </div>
      </div>
    </div>
  );
}


export default Table; 