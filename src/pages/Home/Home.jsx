import React, { useContext } from 'react';
import './home.scss';
import NextCounter from '../../context/NextCounter';



const Home = () => {
  const {nextCount, setNextCount} = useContext(NextCounter);

  const nextCounterHandalINC = () =>{
    setNextCount((prev) => prev -1);
  }

  const nextCounterHandalDNC = () => {
    setNextCount((prev) => prev + 1);
  }
  return (
    <>
     <h1>{nextCount}</h1>
     <button onClick={nextCounterHandalINC}>--</button>
     <button onClick={nextCounterHandalDNC}>++</button>
    </>
  )
}

export default Home
