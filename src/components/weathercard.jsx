import React, { useEffect } from "react";
import cloudybg from '../assets/cloudy.mp4'
import rainbg from '../assets/rain.mp4'
import hazebg from '../assets/foggy.mp4'
import "./style.css";
const Weathercard = ({
  temp,
  humidity,
  pressure,
  weathermood,
  name,
  speed,
  country,
  sunset,
  
}) => {
  const [weatherState, setWeatheState] = React.useState("");
  const [bg, setBg] = React.useState();
  
  useEffect(() => {
    if (weathermood) {
      switch (weathermood) {
        case "Clouds":
          setWeatheState("wi-day-cloudy");
          
          
          break;
        case "Haze":
          setWeatheState("wi-fog");
          break;
          case "Smoke":
          setWeatheState("wi-fog");
          break;
        case "Clear":
          setWeatheState();
          break;
        case "Mist":
          setWeatheState("wi-dust");
          break;

          case "Sunny":
            setWeatheState("wi-day-sunny");
            break;
            case "Rain":
            setWeatheState("wi-rain-wind");
            break;
        default:
          setWeatheState("");
          
          break;
      }
    }
  }, [weathermood]);

 


  useEffect(() => {
    if (weathermood) {
      switch (weathermood) {
        case "Clouds" :
          setBg(cloudybg);
          
          
          break;
        case "Haze"  :
          setBg(hazebg);
          break;
          case "Smoke"  :
            setBg(hazebg);
            break;
            case "Sunny"  :
              setBg(hazebg);
              break;
        case "Clear":
          setBg(hazebg);
          break;
        case "Mist":
          setBg(cloudybg);
          break;

          case "Rain":
          setBg(rainbg);
          break;
          case "Thunderstorm":
          setBg(rainbg);
          break;

        default:
          setBg(cloudybg);
          
          break;
      }
    }
  }, [weathermood]);




   

  // converting the seconds into time
  let sec = sunset;
  let date = new Date(sec * 1000);
  let timeStr = `${date.getHours()}:${date.getMinutes()}`;
  return (
    <>
      <article className="widget">
     
     
<div className="weatherIcon">
<video  autoPlay loop muted playsInline src={bg} style={{width:"100%",height:"33vh",position:"absolute",objectFit:"cover",borderTopRightRadius:"20px",borderTopLeftRadius:"20px"}}>

      </video>

        
         
  <i style={{position:"absolute"}} className={`wi ${weatherState}`}></i>
</div>
        <div className="weatherInfo">
          <div className="temperature">
            <span>{temp}&deg;</span>
          </div>

          <div className="description">
            <div className="weatherCondition">{weathermood}</div>
            <div className="place">
              {name}, {country}
            </div>
          </div>
        </div>

        <div className="date"> {new Date().toLocaleString()} </div>

        {/* our 4column section  */}
        <div className="extra-temp">
          <div className="temp-info-minmax">
            <div className="two-sided-section">
              <p>
                <i className={"wi wi-sunset"}></i>
              </p>
              <p className="extra-info-leftside">
                {timeStr} PM <br />
                Sunset
              </p>
            </div>

            <div className="two-sided-section">
              <p>
                <i className={"wi wi-humidity"}></i>
              </p>
              <p className="extra-info-leftside">
                {humidity} <br />
                Humidity
              </p>
            </div>
          </div>

          <div className="weather-extra-info">
            <div className="two-sided-section">
              <p>
                <i className={"wi wi-rain"}></i>
              </p>
              <p className="extra-info-leftside">
                {pressure} <br />
                Pressure
              </p>
            </div>

            <div className="two-sided-section">
              <p>
                <i className={"wi wi-strong-wind"}></i>
              </p>
              <p className="extra-info-leftside">
                {speed} <br />
                Speed
              </p>
            </div>
          </div>
        </div>
      </article>
    </>
  );
};


export default Weathercard;