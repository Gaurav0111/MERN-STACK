import React from "react";
import { NetflixSeries } from "./components/NetflixSeries";
import Profile from "./components/Profile";

export default function App() {
  return (
    <section className="container" >
      {/* <Profile /> */}
      <NetflixSeries />
      {/* <NetflixSeries /> */}
    </section>
  )
}

// export default App;

// export const App = () => {
//   return <h1>hey..!!</h1>;
// };