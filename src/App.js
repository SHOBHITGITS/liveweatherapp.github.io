import axios from "axios";
//import { Button } from "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css"
import {useState} from "react";
import { useEffect } from "react";
import './App.css';

function App() {


  const apiKey="88fac44300f4669be0adb19ddd05a94c"
  const [inputCity, setInputCity]=useState("")
  const[data,setData]=useState({})

const getWeatherDetails=(cityName) =>{
  if(!cityName) return
  const apiURL="http://api.openweathermap.org/data/2.5/weather?q="+cityName+"&appid="+ apiKey
  axios.get(apiURL).then((res)=>{
    console.log("response",res.data)

    setData(res.data)

  }).catch((err)=>{
    console.log("err",err)
  }) 
}

const handleChangeInput=(e)=>{
  console.log("value",e.target.value)
  setInputCity(e.target.value)
}

const handleSearch=()=>{
  getWeatherDetails(inputCity)
}

useEffect(()=>{
    
  getWeatherDetails("Varanasi")
}, [])
  return (
    <>
    <div className = "col-md-12">
        <div className = "weatherBg">
            <h1 className="heading">Live Weather App</h1>

<div className="d-grid gap-2 col-4 mt-4">
<input type="text" className="form-control"
  value={inputCity}
  onChange={handleChangeInput}/>
<button className="btn btn-primary" type="button"
  onClick={handleSearch}
>Howdy Weather!</button>
</div>
    </div>

    <div className="col-md-12 text-center mt-5">
      <div className="shadow rounded weatherResultBox">
        
        <img className="weatherIcon"
        src="https://uxwing.com/wp-content/themes/uxwing/download/weather/weather-icon.png"></img>

          <h5 className="weatherCity">
            {data?.name}
          </h5>
          <h6 className="weatherTemp">{((data?.main?.temp)-273.15).toFixed(2)}°C</h6>
      </div>

    </div>
    </div>
    </>
  );
}

export default App;
