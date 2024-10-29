import './App.css';
import SlotMachineGame from './component/SlotMachineGame';

const SlotM = (parameter) => {
  // let x = 'A';
  // let y = 'A';
  // let z = 'A';

  if ((parameter.x === parameter.y) && (parameter.y === parameter.z)) {
    return (
      <div className='slot_inner' >
        <h1>
          {parameter.x} {parameter.y} {parameter.z}
        </h1>
        <h1> This is Matching. </h1>
      </div>
    );
  } else {
    return (
      <div className='slot_inner' >
        <h1>
          {parameter.x} {parameter.y} {parameter.z}
        </h1>
        <h1> This is Not Matching. </h1>
      </div>
    );
  }
}

const App = () => {
  return (
    <>
      {/* <h2>Welcome to  <span style={{ fontWeight: 'bold' }} > Slot Machine Game</span></h2>
      <div className='slotMachine' >
        <SlotM x='A' y='A' z='A' />
      </div> */}
      <SlotMachineGame />
    </>
  );
}


export default App;
