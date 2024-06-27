import { useEffect, useRef, useState } from "react"
const Clock = () => {
    const [currentTime , setCurrentTime] = useState(new 
        Date())

        const currentTimeRef = useRef(currentTime)

        console.log("ren");
    
            useEffect(()=>{
            const timer = setInterval(()=>{
                const newTime = new Date()
                currentTimeRef.current = newTime
                setCurrentTime(newTime)
            },1000)
        
            return () => clearInterval(timer)
            },[])
        
            function formatDigit(num){
            return num < 10 ? `0${num}` : num
            }
        
            function formatHours(hour){
            return hour===0? 12 : hour > 12 ? hour-12 : hour
            }
        
            const formatDay =(date) =>{
            const option = { weekday : "long" ,year: "numeric" , month : "long", day: "numeric"}
            return date.toLocaleDateString(undefined,option)
            }
            
        return (
            <div className="main">
            <div className="digital">
                <h2>Digital Clock</h2>
                <div className="time"> 
                <p >{formatDigit(formatHours(currentTime.getHours()))} 
                    : {formatDigit(currentTime.getMinutes())}
                    : {formatDigit(currentTime.getSeconds())}
                    {currentTime.getHours() >= 12 ? "   Pm" : "  AM"}
                    </p>
                    
                </div>
                <div className="date">
                <p>{formatDay(currentTime)}</p>
                </div>
            </div>
            </div>
        )
}

export default Clock