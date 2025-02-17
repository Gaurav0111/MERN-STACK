import React from "react";
import { NetflixSeries } from "./components/NetflixSeries";
import Profile from "./components/Profile";
import './components/Netflix.module.css'

export default function App() {
  return (
    <section className="container" >
      {/* <Profile /> */}
      <h1 className="card-heading">List of Netflix Series</h1>
      <NetflixSeries />
      {/* <NetflixSeries /> */}
    </section>
  )
}

// export default App;

// export const App = () => {
//   return <h1>hey..!!</h1>;
// };