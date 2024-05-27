import { useEffect, useState } from 'react';
import './team.scss';

const Team = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("My name is masud rana")
  }, [count]);


  const setCountHandleINC = () => {
     setCount((prive) => prive + 1)
  }
  const setCountHandleDSCE = () => {
     setCount((prive) => prive - 1)
  }
  return (
    <>
     <div className="container">
      <h1>{count}</h1>
      <button onClick={setCountHandleINC}>++</button>
      <button onClick={setCountHandleDSCE}>--</button>
     </div>
    </>
  )
}

export default Team
