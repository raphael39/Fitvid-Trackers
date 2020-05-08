import React, { Component } from "react";

class Countdown extends Component {

  state = {
    timerOn: false,
    timerStart: 0,
    timerTime: 0
  };

  startTimer = () => {
    this.setState({
      timerOn: true,
      timerTime: this.state.timerTime,
      timerStart: this.state.timerTime
    });
    this.timer = setInterval(() => {
      const newTime = this.state.timerTime - 10;
      if (newTime >= 0) {
        this.setState({
          timerTime: newTime
        });
      } else {
        clearInterval(this.timer);
        this.setState({ timerOn: false });
        alert("Countdown ended");
      }
    }, 10);
  };

  stopTimer = () => {
    clearInterval(this.timer);
    this.setState({ timerOn: false });
  };

  resetTimer = () => {
    if (this.state.timerOn === false) {
      this.setState({
        timerTime: this.state.timerStart
      });
    }
  };

  adjustTimer = input => {
    const { timerTime, timerOn } = this.state;
    const max = 216000000;
    if (!timerOn) {
      if (input === "incHours" && timerTime + 3600000 < max) {
        this.setState({ timerTime: timerTime + 3600000 });
      } else if (input === "decHours" && timerTime - 3600000 >= 0) {
        this.setState({ timerTime: timerTime - 3600000 });
      } else if (input === "incMinutes" && timerTime + 60000 < max) {
        this.setState({ timerTime: timerTime + 60000 });
      } else if (input === "decMinutes" && timerTime - 60000 >= 0) {
        this.setState({ timerTime: timerTime - 60000 });
      } else if (input === "incSeconds" && timerTime + 1000 < max) {
        this.setState({ timerTime: timerTime + 1000 });
      } else if (input === "decSeconds" && timerTime - 1000 >= 0) {
        this.setState({ timerTime: timerTime - 1000 });
      }
    }
  };
  
  convertToMilliseconds = (time) => {
    if(!time.includes(":")) return Number(time)*1000;
    if(time.split(":").length===2) {
      const seconds = Number(time.split(":")[1])*1000;
      const minutes = Number(time.split(":")[0])*60000;
      return Number(minutes+seconds)
    }
    if(time.split(":").length===3) {     
      const seconds = Number(time.split(":")[2])*1000;
      const minutes = Number(time.split(":")[1])*60000;
      const hours = Number(time.split(":")[0])*3600000;
      return Number(hours+minutes+seconds)
    }
    return undefined;    
  };
  
  render() {

    const { timerTime, timerStart, timerOn,} = this.state;
    let seconds = ("0" + (Math.floor((timerTime / 1000) % 60) % 60)).slice(-2);
    let minutes = ("0" + Math.floor((timerTime / 60000) % 60)).slice(-2);
    let hours = ("0" + Math.floor((timerTime / 3600000) % 60)).slice(-2);

    return (
      <div className="Countdown">
        <div className="Countdown-header">Timer Countdown</div>
        <div className="Countdown-label">Hours : Minutes : Seconds</div>
          <div className="Countdown-display">
            <button onClick={() => this.adjustTimer("incHours")}>&#8679;</button>
            <button onClick={() => this.adjustTimer("incMinutes")}>&#8679;</button>
            <button onMouseUp={() => this.adjustTimer("incSeconds")} onMouseDown={() => {}}>&#8679;</button>
              <div className="Countdown-time">
              {hours} : {minutes} : {seconds}
              </div>
          <button onClick={() => this.adjustTimer("decHours")}>&#8681;</button>
          <button onClick={() => this.adjustTimer("decMinutes")}>&#8681;</button>
          <button onClick={() => this.adjustTimer("decSeconds")}>&#8681;</button>
        </div>
        {timerOn === false &&
          (timerStart === 0 || timerTime === timerStart) && (
            <button onClick={this.startTimer}>Start</button>
          )}
        {timerOn === true && timerTime >= 1000 && (
          <button onClick={this.stopTimer}>Stop</button>
          )}
        {timerOn === false &&
          (timerStart !== 0 && timerStart !== timerTime && timerTime !== 0) && (
            <button onClick={this.startTimer}>Resume</button>
          )}
        {(timerOn === false || timerTime < 1000) &&
          (timerStart !== timerTime && timerStart > 0) && (
            <button onClick={this.resetTimer}>Reset</button>
          )}
          <br/>
          Set time: <input type="text" onChange={(event) => {console.log(this.convertToMilliseconds(event.target.value)); this.setState({timerTime: (this.convertToMilliseconds(event.target.value))})
          }}></input>

      </div>
    );
  }
}
export default Countdown;