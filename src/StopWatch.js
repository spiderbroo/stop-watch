import {fromEvent, Observable, interval} from 'rxjs';
import React from 'react';


const digital = document.getElementById('digital');
const source = interval(1000)

let started = false;
let time = 0;

function StopWatch() {
  return(
    <div>
      <Display/> 
      <StartButton/> 
      <StopButton/> 
      <SplitButton/> 
      <ResetButton/> 
    </div>
  ) 
};

    function Display() {
      return (
        <div id='digital'></div>
      )
    };

  const subscription = source.subscribe(
    x => {
      if(!started) return;
      time++;
      Display = Math.floor(time / 600) + ":" + Math.floor((time / 10) % 60) + ":" + (time % 10) + "0";
    });



    function StartButton() {
        return (
          <button>Start</button>)
    }
    const StartLambda = () => {
      React.useEffect(() => {const StartButtonAction = fromEvent(<StartButton/>, 'click')
        .subscribe(e => {
          started = true;
        });
        return () => StartButtonAction.unsubscribe();
      }, []);
      return (
        <StartButton/>
      )
}
    function StopButton() {
        return(
          <button>Stop</button>
        )
    }
    
    const StopLambda = () => {
      React.useEffect(() => {const StopButtonAction = fromEvent(<StopButton/>, 'click')
        .subscribe(e => {
          started = false;
        });
        return () => StopButtonAction.unsubscribe();
      }, []);
      return (
        <StopButton/>
      )};
    //   const StopButtonAction = fromEvent(<StopButton/>, 'click')
    //     .subscribe(e => {
    //       started = false;
    //     });

    function SplitButton() {
        return(
          <button>Wait</button>
        )
    }
    function ResetButton() {
        return(
          <button >Reset</button>
        )
    }

    
    const ResetLambda = () => {
      React.useEffect(() => {const ResetButtonAction = fromEvent(<ResetButton/>, 'click')
        .subscribe(e => {
          console.log('S');
          started = false;
          time = 0;
          digital.innerHTML = "00:00:00"
        });
        return () => ResetButtonAction.unsubscribe();
      }, []);
      return (
        <ResetButton/>
      )};
    //   const ResetButtonAction = fromEvent(<ResetButton/>, 'click')
    //     .subscribe(e => {
    //       started = false;
    //       time = 0;
    //       digital.innerHTML = "00:00:00"
    //     });
  
export default StopWatch