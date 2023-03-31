import React from 'react';
import arrow from './images/icon-arrow.svg';


const App = () => {
  const [ip, changeIPAdress] = React.useState('');

  return (
    <div className='h-[100vh] w-full bg-'>
      <div className='h-[300px] bg-hero-pattern bg-no-repeat bg-center bg-cover'>
        <h1 className='text-center text-white text-serif text-3xl pt-8'>IP Address Tracker</h1>
        <div className='text-center pt-12 flex justify-center'>
          <input className="rounded-l-lg h-12 w-64 px-4" placeholder='xxx.xxx.xxx.xxx'/>
          <button className='h-12 rounded-r-lg bg-black px-4'>
            <img src={arrow}/>
          </button>
        </div>
      </div>
    </div>
  )
}

export default App;