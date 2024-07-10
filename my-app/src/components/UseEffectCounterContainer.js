import React, { useState } from 'react'
import UseEffectCounterImportantToUnderstand from "./UseEffectCounterImportantToUnderstand.js"

function UseEffectCounterContainer() {
    const [display, setDisplay] = useState(true);
  return (
    <div>
        <button onClick={() => {
              setDisplay(!display)
        }}>
            Toggle Display
        </button>
          {display && <UseEffectCounterImportantToUnderstand />}
    </div>
  )
}

export default UseEffectCounterContainer