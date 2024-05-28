import { useContext } from 'react';
import './team.scss';
import MesContext from '../../context/MsgContext';
import CounterContext from '../../context/CounterContext';

const Team = () => {

  const {count, setCount} = useContext(MesContext);
  const {text, setText} = useContext(CounterContext);

  const setCountHandleINC = () => {
     setCount((prive) => prive + 1)
  }
  const setCountHandleDSCE = () => {
     setCount((prive) => prive - 1)
  }
  return (
    <>
     <div className="container">
      <h1>{count} {text} </h1>
      <button onClick={setCountHandleINC}>++</button>
      <button onClick={setCountHandleDSCE}>--</button>
     </div>
    </>
  )
}

export default Team
