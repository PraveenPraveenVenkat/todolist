import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Header from './assets/Header.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Header/>
  </StrictMode>,
)




// import Header from './assets/Header.jsx';

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//     <Header/>
  

//   </StrictMode>,
// )

