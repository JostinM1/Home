import { useState, useRef } from 'react'

function App() {

    const btnRef = useRef(null);
    const handleMouseMove = (e) => {
      const btn = btnRef.current
      let rect = btn.getBoundingClientRect();
      let x = e.clientX - rect.left;
      btn.style.setProperty('--x', x + 'deg')
    }


  return (

    <>
      <a ref={btnRef} href="#" onMouseMove={handleMouseMove}> 
        <i></i>
        <i></i>
        <span>Home</span>
    </a>

    </>
  )
}

export default App
