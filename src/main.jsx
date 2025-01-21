import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
//import './index.css'
import './assets/app.css'
//import App from './App.jsx'
import { UserCard } from './components/UserCard.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    
    <UserCard />
  </StrictMode>
)
