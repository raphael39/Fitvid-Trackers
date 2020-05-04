import React, { useState, useEffect } from "react";

function Table ({editable, rowsCompiled, setTimeVideo, setClickTimestamp, clickTimestamp}) {

  const [rows, setRows] = useState([{name: "", sets: "", reps: "", timestamp: "",done: false}]);

  useEffect(()=>{
    rowsCompiled && setRows(rowsCompiled)
  }, [])
   
  //TO MODIFY
  const handleChange = (event, index, name) => {
    event.preventDefault();
    console.log(event.target.value, index, name);
    // rows[index][name] = event.target.value;
    const newRows = rows;
    newRows[index][name] = event.target.value;
    setRows(newRows);
  }

  const handleAddRow = () => {
    const item = {
      name: "",
      sets: "",
      reps: "",
      timestamp: "",
      done: false
    }
    setRows([...rows, item])
  }
  
  const handleRemoveRow = () => {
    setRows(rows.slice(0, -1));
  }

  // const handleRemoveSpecificRow = (index) => {
  //   // const newRows = rows
  //   // console.log(newRows)
  //   // const newRows = rows.splice(index, 1);
  //   const newRows = rows.filter(row => row !== rows[index]);
  
  //   console.log("new Rows", newRows)
  //   // console.log(newRows)
  //   setRows(newRows);
  // }

  const handleCheckbox = (index) => {
    rows[index].done = !(rows[index].done)
  }

  const logRow= () => console.log(rows)

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
                  <th className="text-center"> Name of the exercise </th>
                  <th className="text-center"> Sets </th>
                  <th className="text-center"> Reps </th>
                  <th className="text-center"> Timestamp </th>
                  <th className="text-center"> Check </th>
                  <th />
                </tr>
              </thead>
              <tbody>
                {editable && rows.map((item, idx) => (
                  <tr id="addr0" key={idx}>
                    <td>
                      <input
                          type="text"
                          name="name"
                          onChange={(event) => handleChange(event, idx, "name")}
                          className="form-control"
                        />
                    </td>
                    <td>
                      <input
                        type="text"
                        name="sets"
                        onChange={(event) => handleChange(event, idx, "sets")}
                        className="form-control"
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        name="reps"
                        onChange={(event) => handleChange(event, idx, "reps")}
                        className="form-control"
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        name="timestamp"
                        onChange={(event) => handleChange(event, idx, "timestamp")}
                        className="form-control"
                      />
                    </td>
                    <td>
                      <input
                        type="checkbox"
                        name="done"
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
                {!editable && rows.map((item, idx) => (
                  <tr id="addr0" key={idx}>
                    <td>
                      {rows[idx].name}
                    </td>
                    <td>
                      {rows[idx].sets}

                    </td>
                    <td>
                      {rows[idx].reps}
                    </td>
                    <td onClick={()=>{setTimeVideo(rows[idx].timestamp); setClickTimestamp(!clickTimestamp)}}>
                      {rows[idx].timestamp}
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
            <button onClick={handleAddRow} className="btn btn-primary">
              Add Row
            </button>
            <button
              onClick={handleRemoveRow}
              className="btn btn-danger float-right"
            >
              Delete Last Row
            </button>
            </div>}
            <button
              onClick={logRow}
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