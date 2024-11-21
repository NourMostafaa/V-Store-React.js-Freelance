import Main from '../Components/Main/Main';
import MostGames from '../Components/MostGames/MostGames';
import './Home.css'
import React from 'react'

const Home = () => {
  return (
    <div className='Home'>
    <Main />
    <MostGames />
    </div>
  )
}

export default Home