import logo from './logo.svg';
import './App.css';
import AnimatedText from 'react-animated-text-content';
import React, { useState, useEffect } from 'react';

const getReturnValues = (countDown) => {
  // calculate time left
  const days = Math.floor(countDown / (60 * 60 * 24));
  const hours = Math.floor(
    (countDown % (60 * 60 * 24)) / (60 * 60)
  );
  const minutes = Math.floor((countDown % (60 * 60)) / (60));
  const seconds = Math.floor((countDown % (60)));

  return ("0" + hours).slice(-2) + ":" + ("0" + minutes).slice(-2) + ":" + ("0" + seconds).slice(-2);
};

function App() {
  const [money, setMoney] = useState(0);
  const [timeLeft, settimeLeft] = useState(10800); // 3 hours
  const [time, setTime] = useState([0,0,0,0]);

  useEffect(() => {
    var interval;

    if (timeLeft > 0) {
      interval = setInterval(() => {
        setMoney(m => m + 2);
        settimeLeft(m => m - 1);
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [timeLeft]);

  return (
    <div className="App">
      <div style={{height: "100vh", width: "100vw", display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column"}}>
        <img src='/logo.png' style={{width: '30%'}}/>
      <h1 className='header'>Time left</h1> <br />
      <div style={{fontSize: "5rem"}} className={timeLeft <= 0 && 'red'}>
        {getReturnValues(timeLeft)}
      </div> <br />
      <h1 className='header'>Money earned</h1> <br />
      <AnimatedText 
        type="words"
        animationType="bounce"
        duration={0.2}
        style={{fontSize: "5rem"}}
        >
        
        {"¥" + money.toString()}
      </AnimatedText>
      
      </div>
    </div>
  );
}

export default App;
