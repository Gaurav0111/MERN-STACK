import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import 'https://drive.google.com/file/d/1d23DHFuRa0NjmTlGV4QqSsZH8U1kkBv3/view?usp=sharing'
import App from './App.jsx'
import { Practices } from './Practices.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    {/* <Practices /> */}
  </StrictMode>,
)
