import React,{useState} from 'react'
import { useEffect } from 'react';
import "../../styles/clock.css";

function Clock() {
const [days,setDays] = useState(0);
const [hours,setHours] = useState(0);
const [minutes,setMinutes] = useState(0);
const [seconds,setSeconds] = useState(0);

const deadline = "Dec.,31,2022"

const getTime = () => {
  const time = Date.parse(deadline) -Date.now()

  setDays(Math.floor(time / (1000 * 60 * 60 * 24)))
  setHours(Math.floor((time / (1000 * 60 * 60)) % 24))
  setMinutes(Math.floor((time / 1000 / 60) % 60))
  setSeconds(Math.floor((time / 1000) % 60 ))
}

useEffect (() => {
  const interval = setInterval(() => getTime(deadline),1000)

  return () => clearInterval(interval)
},[])
  return (
    <div className="clock_wrapper d-flex align-items-center gap-4">
      <div className="clock_data  d-flex align-items-center gap-4">
        <div className="text-center">
          <h1 className="text-white fs-3">{days < 10 ? "0" + days : days}</h1>
          <h5 className="text-white fs-6">Days</h5>
        </div>
        <span className="text-white fs-3">:</span>
      </div>

      <div className="clock_data  d-flex align-items-center gap-4">
        <div className="text-center">
          <h1 className="text-white fs-3">{hours < 10 ? "0" + hours : hours}</h1>
          <h5 className="text-white fs-6">Hours</h5>
        </div>
        <span className="text-white fs-3">:</span>
      </div>

      <div className="clock_data  d-flex align-items-center gap-4">
        <div className="text-center">
          <h1 className="text-white fs-3">{minutes < 10 ? "0" + minutes : minutes}</h1>
          <h5 className="text-white fs-6">Minutes</h5>
        </div>
        <span className="text-white fs-3">:</span>
      </div>

      <div className="clock_data  d-flex align-items-center gap-4">
        <div className="text-center">
          <h1 className="text-white fs-3">{seconds < 10 ? "0" + seconds : seconds}</h1>
          <h5 className="text-white fs-6">Second</h5>
        </div>

      </div>
    </div>
  )
}

export default Clock