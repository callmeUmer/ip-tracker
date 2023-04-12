import React from 'react';
import arrow from './images/icon-arrow.svg';
import Map from './components/map';
import axios from 'axios';

const App = () => {
  const [ip, changeIPAdress] = React.useState("");
  const [res, changeRes] = React.useState({})
  const url = "http://ip-api.com/json/"
  
  const getData = async (ip = "") => {
    const res = await axios.get(url + ip)
    changeRes(res.data)
  }

  React.useEffect(() => {
    getData()
  }, [])

  const getUTC = (tz) => {
    let offset = new Date().toLocaleDateString("en-US",
      {timeZone: tz, timeZoneName: "longOffset"}
    ).split(" ")[1].replace("GMT", "UTC ")
    return offset
  }

  const onChangeIP = (e) => {
    e.preventDefault()
    console.log(e.target.value)
    changeIPAdress(e.target.value)
  }

  const submitIP = (e) => {
    e.preventDefault();
    getData(ip)
  }

  return (
    <div className='h-[100vh] w-full bg-black'>
      <div className='h-[300px] sm:bg-hero-pattern bg-hero-mobile bg-no-repeat bg-center bg-cover'>
        <h1 className='text-center text-white text-sans text-3xl pt-8'>IP Address Tracker</h1>
        <div className='text-center pt-12 flex justify-center mx-3'>
          <input className="rounded-l-lg h-12 lg:w-1/4 md:w-1/2 w-full px-4 focus:outline-none" placeholder='Search for any IP address or domain' value={ip} onChange={onChangeIP} />
          <button className='h-12 rounded-r-lg bg-black px-4 ml-[-2px]' onClick={submitIP}>
            <img src={arrow} alt="arrow for the button"/>
          </button>
        </div>
      </div>

      <div className='absolute z-10 left-0 right-0 md:mx-auto mx-3 grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-4 p-8 sm:mt-[-75px] mt-[-125px] max-w-4xl bg-white rounded-xl shadow-lg'>
        <div className='ml-2 pl-3 md:border-r w-full h-full border-neutral-200'>
          <h2 className='text-xs text-sans text-neutral-200'>IP ADDRESS</h2>
          <p className='text-xl text-sans font-medium pt-2'>{res.query}</p>
        </div>
        <div className='ml-2 md:border-r w-full pl-3 h-full border-neutral-200'>
          <h2 className='text-xs text-sans text-neutral-200'>LOCATION</h2>
          <p className='text-xl text-sans font-medium pt-2'>{res.city}, {res.region} {res.zip}</p>
        </div>
        <div className=' ml-2 md:border-r w-full pl-3 h-full border-neutral-200'>
          <h2 className='text-xs text-sans text-neutral-200'>TIMEONE</h2>
          <p className='text-xl text-sans font-medium pt-2'>{getUTC(res.timezone)}</p>
        </div>
        <div className='ml-2 h-full pl-3'>
          <h2 className='text-xs text-sans text-neutral-200'>ISP</h2>
          <p className='text-xl text-sans font-medium pt-2'>{res.isp}</p>
        </div>
      </div>

      <div className="h-[67%] w-full">
        {res.lat && <Map
          coords={[res.lat, res.lon]}
        />}
      </div>

    </div>
  )
}

export default App;