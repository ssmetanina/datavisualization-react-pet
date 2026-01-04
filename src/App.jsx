import { useState, useRef } from 'react'
import './index.css'
import IntroModal from './components/IntroModal';
import Landing from './components/Landing';

function App() {
  const [phase, setPhase] = useState('intro') // intro | landing
  const landingRef = useRef(null);

  const handleStart = () => {
    setPhase('landing')
  };

  return (
    <>
    {
      phase === 'intro' && (
        <IntroModal 
        onStart={handleStart}
        />
      )
    }
    {
    phase === 'landing' && (
    <div ref={landingRef}>
    <Landing/>
    </div>
      )
    }
     
    </>
  )
}

export default App
